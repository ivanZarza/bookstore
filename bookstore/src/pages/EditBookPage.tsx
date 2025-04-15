import Heading from "../components/layouts/HeadingComponent";
import InputComponentZod from "../components/layouts/InputComponentZod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import bookSchema from '../configs/SchemasZod';
import { useParams, useLocation } from "react-router-dom";


type FormValues = {
  title: string;
  author: string;
  type: 'Tapa dura' | 'Tapa blanda';
  price: number;
  photo: string;
};

type inputLibroProps = {
  name: 'title' | 'author' | 'type' | 'price' | 'photo';
  type: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined
};

function EditBook() {


  const params = useParams();
  console.log('params', params);

  const location = useLocation()

  const { state } = location
  console.log(state);

  const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: state?.title || "", 
      author: state?.author || "", 
      type: state?.type || "", 
      price: state?.price || 0, 
      photo: state?.photo || "",
    },
  })


  function onSubmit(data: FormValues) {
    console.log('datos', data);
  }

  const datosUsuario: inputLibroProps[] = [
    {
      name: "title",
      type: "text",
      placeholder: 'Title',
      value: `${state.title}`
    },
    {
      name: "author",
      type: "text",
      placeholder: "Autor",
      value: `${state.author}`
    },
    {
      name: "price",
      type: "number",
      placeholder: "Precio",
      value: `${state.price}`
    },
    {
      name: "photo",
      type: "text",
      placeholder: "URL de la foto",
      value: `${state.photo}`
    },
  ];

  return <>

    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="EDITA EL LIBRO" />
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-teal-300 inset-shadow-xs shadow-outline p-20 shadow-lg flex flex-col gap-3 bg-gray-100 min-w-2xl"
      >
        {datosUsuario.map((input) =>
          <InputComponentZod
            key={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            register={register}
            errors={errors}
/*             defaultValue={input.value} */
          />)}
        <div className="w-full flex border-2 pl-1.5  flex-col justify-between focus:outline-none bg-gray-200 border-teal-500 ">
          <label className="text-gray-700 text-2xl">
            Tipo de tapa
            <select
              {...register("type")}
              className="w-full pl-1.5 text-2xl flex-col justify-between focus:outline-none bg-gray-200 border-teal-500 placeholder:text-2xl `"
            >
              <option value={state.type ?`${state.type}`: ''}>{state.type ?`${state.type}`: "Elige una opcion"}</option>
              <option value={'Tapa dura'} >Tapa dura</option>
              <option value={'Tapa blanda'}>Tapa blanda</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">"Campo obligatorio"</p>
            )}
          </label>
        </div>
        <button type="submit" className="w-auto">
          Enviar
        </button>
      </form>
    </div>
  </>
};

export default EditBook;