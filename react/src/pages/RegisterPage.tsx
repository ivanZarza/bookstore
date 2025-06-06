import Heading from "../components/layouts/HeadingComponent";
import FormComponent from "../components/layouts/FormComponent";
import InputComponent from "../components/layouts/InputComponent";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

type inputLibroProps = {
  name: string,
  type: string,
  placeholder: string,
  value: string | number | boolean,
  pattern: string
  required: boolean
}

const {
  VITE_API_ORIGIN
} = import.meta.env

function RegisterPage() {
  const navigate = useNavigate()

  const [datosRegistro, setDatosRegistro] = useState<inputLibroProps[]>([
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nombre',
      value: '',
      pattern: '^.{4,8}$',
      required: true,
    },
    {
      name: 'last_name',
      type: 'text',
      placeholder: 'Apellidos',
      value: '',
      pattern: '^.{4,20}$',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Correo electronico',
      value: '',
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      required: true,
    },
    {
      name: 'photo',
      type: 'text',
      placeholder: 'URL de la foto',
      value: '',
      pattern: '^.{4,200}$',
      required: true,
    },
    {
      name: 'password1',
      type: 'password',
      placeholder: 'Contraseña',
      value: '',
      pattern: '^.{4,8}$',
      required: true,
    },
    {
      name: 'password2',
      type: 'password',
      placeholder: 'Repite la contraseña',
      value: '',
      pattern: '^.{4,8}$',
      required: true,
    },
  ])

  const [error, setError] = useState<{ [name: string]: boolean }>({
    name: false,
    last_name: false,
    email: false,
    photo: false,
    password: false,
    password2: false,
  })

  function recuperarDatos(name: string, value: string | number | boolean) {
    const objeto = datosRegistro.find((objeto) => objeto.name === name)

    if (!objeto) return

    objeto.value = value
    setDatosRegistro(datosRegistro)
  }

  function validarDatos(name: string, value: string | number | boolean) {
    const objeto = datosRegistro.find((objeto) => objeto.name === name)
    if (!objeto) return
    const regex = new RegExp(objeto.pattern);
    setError({ [name]: !regex.test(String(value)) });
  }

  function generarMensajeError(name: string, value: string | number | boolean | undefined): string {

    switch (name) { 

      case 'name': {
        if (!value) return 'El nombre es obligatorio';
        return 'El nombre debe tener entre 4 y 8 caracteres';
      }

      case 'last_name': {
        if (!value) return 'El apellido es obligatorio';
        return 'El apellido debe tener entre 4 y 8 caracteres';
      }

      case 'photo': {
        if (!value) return 'La URL de la foto es obligatoria';
        return 'La URL de la foto debe tener mas de 4 caracteres';
      }

      case 'email': {
        if (!value) return 'El correo electrónico es obligatorio';
        return 'El correo electrónico no es válido';
      }

      case 'password1': {
        if (!value) return 'La contraseña es obligatoria';
        return 'La contraseña debe tener entre 4 y 8 caracteres';
      }

      case 'password2': {
        const password1 = datosRegistro.find((obj) => obj.name === 'password1')?.value;
        if (value !== password1) return 'Las contraseñas no coinciden';
        break;
      }

      default:
        if (!value) return `El campo ${name} es obligatorio`;
    }

    return '';
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nuevoUsuario = {
      name: datosRegistro[0].value,
      last_name: datosRegistro[1].value,
      email: datosRegistro[2].value,
      photo: datosRegistro[3].value,
      password: datosRegistro[4].value,
    };
    console.log(nuevoUsuario)
    try {
      const response = await axios.post(`${VITE_API_ORIGIN}/register`,
        nuevoUsuario,
      { withCredentials: true }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Usuario registrado correctamente");
        navigate("/login")
      } else {
        toast.error("Error al registrar el usuario");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error en la solicitud:", error.message);
        toast.error("Error en la solicitud");
      } else {
        console.error("Error inesperado:", error);
        toast.error("Error inesperado");
      }
    }
  }


  return <>
    <div className="w-full  flex flex-col  items-center " >
      <Heading level="h1" title="RELLENA TUS DATOS" />
      <FormComponent onSubmit={handleSubmit} >
        {
          datosRegistro.map((input) => (
            <InputComponent
              key={input.name}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              pattern={input.pattern}
              required={input.required}
           /*    errorMessage={error[input.name] ? generarMensajeError(input.name, input.value) : ''} */
              error={error}
              validarDatos={validarDatos}
              recuperarDatos={recuperarDatos}
              generarMensajeError={generarMensajeError}
            />
          ))
        }

      </FormComponent>
    </div>
  </>
};

export default RegisterPage;
