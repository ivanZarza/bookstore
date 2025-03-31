import FormComponent from "../components/layouts/FormComponent";
import InputComponent from "../components/layouts/InputComponent";
import { useState } from "react";

function EditBook() {

  const [datos, setDatos] = useState({
    title: '',
    author: '',
    type: '',
    price: 0,
    photo: ''
  })

  function recuperarDatos({ name, value } : { name: string, value: string | number }) {
    console.log('recuperarDatos', { name, value })

    setDatos({...datos, [name]: value}) 
    console.log(name,value )
    console.log(datos);
  }

  return <>
    <div className="w-full h-full flex flex-col justify-center items-center  border-2 ">
      <h1>EDIT BOOK </h1>
      <FormComponent>
        <InputComponent placeholder="Title" name="title" recuperarDatos={recuperarDatos} />
        <InputComponent placeholder="Author" name="author" recuperarDatos={recuperarDatos} />
        <InputComponent placeholder="Type" name="type" recuperarDatos={recuperarDatos} />
        <InputComponent placeholder="Photo" name="photo" recuperarDatos={recuperarDatos} />
        <InputComponent placeholder="cacharro" name="cachaarro" recuperarDatos={recuperarDatos} />
      </FormComponent>
    </div>
  </>
};

export default EditBook;