import InputComponent from "./InputComponent";
import { useState } from 'react'

function FormComponent() {

const [datos, setDatos] = useState({
  title: '',
  author: '',
  type: '',
  price: 0,
  photo: ''
})

  function recuperarDatos(value: string|number, name: string) {

setDatos({...datos, [name]: value}) 
    console.log(datos)
  }



  return <>
    <div className="shadow-teal-200 shadow-outline p-20 shadow-lg flex flex-col gap-3 ">
      <InputComponent placeholder="Title" name="Title" recuperarDatos={recuperarDatos}/>
      <InputComponent placeholder="Author" name="Author"/>
      <InputComponent placeholder="Type" name="Type"/>
      <InputComponent placeholder="Photo" name="Photo"/>  
      <InputComponent placeholder="Photo" name="Photo"/>  
      </div>
      </>
      }

export default FormComponent;