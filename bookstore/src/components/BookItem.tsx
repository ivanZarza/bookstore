

function BookItem() {
  return (
    <>
      <section className="w-full flex flex-col gap-4 p-10 items-center border-2 bg-indigo-100">
        <img src="https://m.media-amazon.com/images/I/914VEoNzIPL._SL1500_.jpg" alt="Portada del libro El Hobbit" className="size w-80" />

          <div className="w-full flex items-start justify-start border-2">
        <h1 className="text-3xl p-6"> El Hobbit</h1>
        </div>
        <div >
          <h4>J.R.R. Tolkien</h4>
          <p >Ciencia Ficción</p>
        </div>
          <div >
          <p>Price: 19.90€</p>
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