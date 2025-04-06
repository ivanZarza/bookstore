import Heading from "../components/layouts/HeadingComponent";
import FormComponentZod from "../components/layouts/FormComponentZod";
import InputComponentZod from "../components/layouts/InputComponentZod";
/* import { useState } from "react" */
import { useForm } from "react-hook-form"

type FormValues = {
  title: string
  author: string
  type: string
  price: number
  photo: string
}

/* type inputLibroProps = {
  name: string,
  type: string,
  placeholder: string,
  value: string | number | boolean
} */

function AddBook() {

  const { register, handleSubmit } = useForm<FormValues>()

  function onSubmit(data:FormValues) {
    console.log('datos', data);
  }
/* 
  const [nuevoLibro, setNuevoLibro] = useState<inputLibroProps[]>([
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
  ]) */

  return <>

    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="AÑADE UN LIBRO" />
      <FormComponentZod onSubmit={handleSubmit(onSubmit)}>
        <InputComponentZod
          placeholder='Titulo'
          type='text'
          {...register('title')}
        />
        <InputComponentZod
          placeholder='Author'
          type='text'
          {...register('author')}
        />
        <InputComponentZod
          placeholder='Tipo'
          type='text'
          {...register('type')}
        />
        <InputComponentZod
          placeholder='Precio'
          type='number'
          {...register('price')}
        />
        <InputComponentZod
          placeholder='Url de la foto'
          type='text'
          {...register('photo')}
        />

      </FormComponentZod>
    </div>
  </>
};

export default AddBook;