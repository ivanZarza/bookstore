import InputComponent from "../components/layouts/InputComponent";

function EditBook() {
  return <>
    <div className="w-full h-96 flex flex-col justify-center items-center  border-2 ">
      <h1>EDIT BOOK </h1>
      <div>
        <InputComponent placeholder="Titulo" name="title"/>
      </div>
    </div>
  </>
};

export default EditBook;