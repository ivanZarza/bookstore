import { useState } from "react";

function AddBookForm() {

  const [newBook, setNewBook] = useState({
    idBook: 0,
    idUser: 0,
    title: "",
    author: "",
    type: "",
    price: 0,
    photo: ""
  })

  function guardarDatos(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('e.t.n', event.target.name,
                'e.t,v', event.target.value,
                'e.t',event.target
    );

/*     const { name, value, type, checked } = event.target; // asi se desestructura el evento con algunas de sus propiedades

    setNewBook({ ...newBook, [name]: type === 'checkbox' ? checked : value }) // asi seria la forma de actualizar el estado de un objeto con una propiedad que es un checkbox, utilizando el operador ternario y despues de hacer la desestructuracion del evento */

    setNewBook({ ...newBook, [event.target.name]: event.target.value })
  };
  return <>
    <form action="" className="flex flex-col w-1/2">
      <input className="bg-amber-200 m-3 " onChange={guardarDatos} name="idBook" placeholder="Id-book" type="number" />
      <input className="bg-amber-200 m-3 " onChange={guardarDatos} name="idUser" placeholder="id-user" type="number" />
      <input className="bg-amber-200 m-3 " onChange={guardarDatos} name="title" placeholder="title" type="text" />
      <input className="bg-amber-200 m-3 " onChange={guardarDatos} name="author" placeholder="author" type="text" />
      <input className="bg-amber-200 m-3 " onChange={guardarDatos} name="type" placeholder="type" type="text" />
      <input className="bg-amber-200 m-3 " onChange={guardarDatos} name="price" placeholder="price" type="number" />
      <input className="bg-amber-200 m-3 " onChange={guardarDatos} name="photo" placeholder="photo" type="text" />
    </form>
    <pre>{JSON.stringify(newBook, null, 2)}</pre>
  </>
};

export default AddBookForm;