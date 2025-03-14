

function BookItem() {
  return (
    <>
      <section className="w-full flex flex-col gap-2 p-20 ">
        <h1 > El Hobbit</h1>
        <img src="https://m.media-amazon.com/images/I/914VEoNzIPL._SL1500_.jpg" alt="Portada del libro El Hobbit" className="size w-80" />
        <div >
          <h4>J.R.R. Tolkien</h4>
          <p >Ciencia Ficción</p>
        </div>
          <div >
          <p>19.90€</p>
            <div >
            <button >Edit</button>
            <button >Elim</button>
            </div>
          </div>
      </section>
    </>
  );
}

export default BookItem;