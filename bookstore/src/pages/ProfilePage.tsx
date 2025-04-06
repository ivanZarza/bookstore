import Heading from "../components/layouts/HeadingComponent";
import FormComponentReactForm from "../components/layouts/FormComponentReactForm";
import InputComponentReactForm from "../components/layouts/InputComponentReactForm";
import { useState } from "react";
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
  name: keyof FormValues,
  type: string,
  placeholder: string,
  value: string | number | boolean
}



function ProfilePage() {

  const { register, handleSubmit } = useForm<FormValues>()

  function onSubmit(data:FormValues) {
    console.log('data', data);
  }

  const [datosUsuario, setDatosUsuario] = useState<inputLibroProps[]>([
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nombre',
      value: '',
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Apellidos',
      value: '',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Correo electronico',
      value: '',
    },
    {
      name: 'photo',
      type: 'text',
      placeholder: 'URL de la foto',
      value: '',
    },
    {
      name: 'password1',
      type: 'password',
      placeholder: 'Contraseña',
      value: '',
    },
    {
      name: 'password2',
      type: 'password',
      placeholder: 'Repite la contraseña',
      value: '',
    },
  ])

  


  return <>
    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="TU PAGINA" />
      <FormComponentReactForm onSubmit={handleSubmit(onSubmit)}>
        {
          datosUsuario.map((input) => (
            <InputComponentReactForm
              key={input.name}
              placeholder={input.placeholder}
              type={input.type}
              {...register(input.name)}
              name={input.name}
            />
          ))
        }
      </FormComponentReactForm>
    </div>
  </>
};

export default ProfilePage;