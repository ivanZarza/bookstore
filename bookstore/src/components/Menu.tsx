// TODO LO COMENTADO ES LA SOLUCION DEL PROFESOR AL EJERCIO DEL TEMA 3

import { NavLink } from "react-router-dom";




/* type MenuProps = {
  isOpenSidebar: boolean;
}  */

function Menu(/* props:MenuProps */) {

  /* const { isOpenSidebar } = props; */

  /* const commoclases = 'clases de tailwind comunes';
  const sideBarClasses = 'clases de tailwind para menu en sidebar';
  const headerClasses = 'clases de tailwind para menu en header';
  const clases = `${commoclases} ${isOpenSidebar ? sideBarClasses: headerClasses}` //TERNARIO PARA DECIDIR QUE CLASES SE PASAN */

  const user = "hola"

  return (
    <>
      <nav className="flex flex-col  justify-around items-center  text-4xl gap-2  w-full  p-4 h-200 bg-gradient-to-b bg-teal-300/90 to-white/90 backdrop-blur-lg
                      md:text-2xl md:gap-6 md:justify-end md:flex-row md:m-2 md:w-full md:bg-none md:h-fit
                      lg:text-3xl lg:gap-8" /* {clases} */>
        <NavLink to="/" >Home</NavLink>
        {!user && <NavLink to="/login" >Login</NavLink>}
        {!user && <NavLink to="/register" >Register</NavLink>}
        {user && <NavLink to="/profile" >Profile</NavLink>}
        {user && <NavLink to="/BookPage" >Libros</NavLink>}
        {user && <NavLink to="/addbook" >Add Book</NavLink>}
        {user && <NavLink to="/editbook" >Edit Book</NavLink>}
      </nav>
    </>
  );
}

export default Menu;