import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BooksContext } from "../contexts/BooksProvider";

function DeleteBookPage() {

  const { id } = useParams();
  console.log('id', id);
  const { deleteBook } = useContext(BooksContext);

  const navigate = useNavigate();
  const handleDeleteBook = async () => {
    try {
      const response = await deleteBook(Number(id));
      if (response.ok) {
        toast.success('Libro borrado correctamente');
        navigate('/bookPage');
      } else {
        toast.error('Error al borrar el libro');
      }
    } catch (error) {
      console.error('Error al borrar el libro:', error);
      toast.error('Error al borrar el libro');
    }
  };

  const handleCancel = () => {
    navigate('/bookPage');
  };
  return (
    <div>
      <h1>Borrar libro</h1>
      <p>Vas a borrar el libro, ¿Estas seguro?</p>
      <button onClick={handleDeleteBook} >Delete</button>
      <button onClick={handleCancel} >Cancelar</button>
    </div>
  );
}

export default DeleteBookPage;