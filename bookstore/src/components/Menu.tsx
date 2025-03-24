
function Menu() {



  return (
    <>
      <nav className="flex flex-col justify-center text-xl gap-4 position-absolute top-20 left-50 w-full bg-teal-300 p-4
                      sm:text-2xl sm:gap-1 sm:justify-end sm:flex-row sm:m-2
                      md:text-3xl 
                      lg:text-4xl">
        <a href="" className="whitespace-nowrap ml-3" >Home</a>
        <a href="" className="whitespace-nowrap ml-3">Libros</a>
        <a href="" className="whitespace-nowrap ml-3">Log In</a>
      </nav>
    </>
  );
}

export default Menu;