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

  const arrayDatos = Object.keys(datos)

  function recuperarDatos(   name: string, value: string | number ) {

    setDatos({...datos, [name]: value}) 
  }

  return <>
    <div className="w-full  flex flex-col  items-center  border-2 ">
      <div className="w-full flex h-1/7 justify-center items-center " >
      <h1 className="text-4xl text-[#53b8fc] titulo"  >EDIT BOOK </h1>
      </div>
      <FormComponent>
      {arrayDatos.map((key) => (
            <InputComponent
              key={key}
              placeholder={key} 
              name={key}
              recuperarDatos={recuperarDatos}
            />
          ))}
      </FormComponent>
    </div>
  </>
};

export default EditBook;