import Heading from "../components/layouts/HeadingComponent";
import InputComponentReactForm from "../components/layouts/InputComponentReactForm";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string
  lastName: string
  email: string
  photo: string
  password1: string
  password2: string
}

type inputLibroProps = {
  name:  keyof FormValues,
  type: string,
  placeholder: string,
  mensajeError: string,
  validators?: {
    maxLength?: { value: number, message: string },
    minLength?: { value: number, message: string },
    required?: { value: boolean, message: string },
    validate?: (value: string) => boolean | string,
  }
}



function ProfilePage() {

  const {
    register,
    handleSubmit,
    watch,
  } = useForm<FormValues>();


  function onSubmit(data: FormValues) {
    console.log('data', data);
  }

  const datosUsuario: inputLibroProps[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nombre',
      mensajeError: 'El nombre no cumple con los requisitos',
      validators: {
        maxLength: { value: 20, message: 'El nombre no puede tener mas de 20 caracteres' },
        minLength: { value: 3, message: 'El nombre no puede tener menos de 3 caracteres' },
        required: { value: true, message: 'El nombre es obligatorio' }
      },
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Apellidos',
      mensajeError: 'Los apellidos cumplen con los requisitos',
      validators: {
        maxLength: { value: 20, message: 'Los apellidos no pueden tener mas de 20 caracteres' },
        minLength: { value: 3, message: 'Los apellidos no pueden tener menos de 3 caracteres' },
        required: { value: true, message: 'Los apellidos son obligatorios' }
      },
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Correo electronico',
      mensajeError: 'El correo no es valido o cumple con los requisitos',
      validators: {
        maxLength: { value: 50, message: 'El correo no puede tener mas de 50 caracteres' },
        minLength: { value: 5, message: 'El correo no puede tener menos de 5 caracteres' },
        required: { value: true, message: 'El correo es obligatorio' }
      },
    },
    {
      name: 'photo',
      type: 'text',
      placeholder: 'URL de la foto',
      mensajeError: 'La URL no es valida o cumple con los requisitos',
      validators: {
        maxLength: { value: 100, message: 'La URL no puede tener mas de 100 caracteres' },
        minLength: { value: 5, message: 'La URL no puede tener menos de 5 caracteres' },
        required: { value: true, message: 'La URL es obligatoria' }
      },
    },
    {
      name: 'password1',
      type: 'password',
      placeholder: 'Contraseña',
      mensajeError: 'El password no cumple los requisitos',
      validators: {
        maxLength: { value: 20, message: 'El password no puede tener mas de 20 caracteres' },
        minLength: { value: 4, message: 'El password no puede tener menos de 8 caracteres' },
        required: { value: true, message: 'El password es obligatorio' }
      },
    },
    {
      name: 'password2',
      type: 'password',
      placeholder: 'Repite la contraseña',
      mensajeError: 'El password no coincide o no cumple los requisitos',
      validators: {
        maxLength: { value: 20, message: 'El password no puede tener mas de 20 caracteres' },
        minLength: { value: 4, message: 'El password no puede tener menos de 8 caracteres' },
        required: { value: true, message: 'El password es obligatorio' },
        validate: (value: string) =>
          value === watch("password1") || "Las contraseñas no coinciden",
      },
    },
  ]




  return <>
    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="TU PAGINA" />
      <form className="shadow-teal-300 inset-shadow-xs shadow-outline p-20 shadow-lg flex flex-col gap-3 bg-gray-100"
        onSubmit={handleSubmit(onSubmit)}>
        {
          datosUsuario.map((input) => (
            <InputComponentReactForm
              key={input.name}
              placeholder={input.placeholder}
              type={input.type}
              mensajeError={input.mensajeError}
              {...register(input.name)}
            />
          ))
        }
        <button type="submit" className=" w-auto"  >Enviar</button>
      </form>
    </div>
  </>
};

export default ProfilePage;