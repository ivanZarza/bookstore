import Heading from "../components/layouts/HeadingComponent";
import FormComponentZod, { FormValues } from "../components/layouts/FormComponentZod";
import InputComponentZod from "../components/layouts/InputComponentZod";





function AddBook() {


  function onSubmit(data:FormValues) {
    console.log('datos', data);
  }

  return <>

    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="AÑADE UN LIBRO" />
      <FormComponentZod onSubmit={onSubmit}>
        <InputComponentZod
          name='title'
          placeholder='Titulo'
          type='text'
        />
        <InputComponentZod
          name='author'
          placeholder='Author'
          type='text'
        />
        <InputComponentZod
          name='type'
          placeholder='Tipo'
          type='text'
        />
        <InputComponentZod
          name='price'
          placeholder='Precio'
          type='number'
        />
        <InputComponentZod
          name='photo'
          placeholder='Url de la foto'
          type='text'
        />
      </FormComponentZod>
    </div>
  </>
};

export default AddBook;