import { createBrowserRouter } from "react-router-dom";
import BooksPage from "../pages/BooksPage";
import HomePage from "../pages/HomePage";
import About from "../pages/LoginPage";
import PruebaRutas from "../components/PruebaRutasAnidadas";

const routes = createBrowserRouter([
{
  path:'/',
  element:<HomePage/>
},
{
  path: '/about',
  element: <About />,
  children: [
    {
      path: 'pruebas',
      element: <PruebaRutas />,
    },
  ],
},
{
  path:'/bookspage',
  element:<BooksPage/>
},
]);

export default routes;