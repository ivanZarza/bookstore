import Heading from "../components/layouts/HeadingComponent";
import FormComponentReactForm from "../components/layouts/FormComponentReactForm";
import InputComponentReactForm from "../components/layouts/InputComponentReactForm";


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
  mensajeError: string,
}



function ProfilePage() {


  function onSubmit(data:FormValues) {
    console.log('data', data);
  }

  const datosUsuario:inputLibroProps[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nombre',
      mensajeError:'El nombre no cumple con los requisitos',
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Apellidos',
      mensajeError:'Los apellidos cumplen con los requisitos',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Correo electronico',
      mensajeError:'El correo no es valido o cumple con los requisitos',
    },
    {
      name: 'photo',
      type: 'text',
      placeholder: 'URL de la foto',
      mensajeError:'La URL no es valida o cumple con los requisitos',
    },
    {
      name: 'password1',
      type: 'password',
      placeholder: 'Contraseña',
      mensajeError:'El password no cumple los requisitos',
    },
    {
      name: 'password2',
      type: 'password',
      placeholder: 'Repite la contraseña',
      mensajeError:'El password no coincide o no cumple los requisitos',
    },
  ]

  


  return <>
    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="TU PAGINA" />
      <FormComponentReactForm onSubmit={onSubmit}>
        {
          datosUsuario.map((input) => (
            <InputComponentReactForm
              key={input.name}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              mensajeError={input.mensajeError}
            />
          ))
        }
      </FormComponentReactForm>
    </div>
  </>
};

export default ProfilePage;