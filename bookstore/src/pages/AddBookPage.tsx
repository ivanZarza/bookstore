import Heading from "../components/layouts/HeadingComponent";
import FormComponent from "../components/layouts/FormComponent";
import InputComponent from "../components/layouts/InputComponent";
import { useState } from "react"

function AddBook( ) {

  const [nuevoLibro, setNuevoLibro] = useState ([
    {
      name: 'title',
      type: 'text',
      placeholder: 'Titulo',
      value: '',
    },
    {
      name: 'author',
      type: 'text',
      placeholder: 'Autor',
      value: '',
    },
    {
      name: 'type',
      type: 'text',
      placeholder: 'Tipo',
      value: '',
    },
    {
      name: 'price',
      type: 'number',
      placeholder: 'Precio',
      value: '',
    },
    {
      name: 'photo',
      type: 'text',
      placeholder: 'URL de la foto',
      value: '',
    },
  ])


  return <>
  <Heading level= "h1" title="AÑADE UN LIBRO"/>
  <FormComponent>

  </FormComponent>
  </>
};

export default AddBook;