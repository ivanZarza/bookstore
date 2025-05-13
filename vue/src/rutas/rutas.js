const rutas = [
  {
    path: '/',
    title: 'INICIO',
  },
  {
    path: '/login',
    title: 'INICIAR SESION',
  },
  {
    path: '/register',
    title: 'REGISTRARSE',
  },
  {
    path: '/profile',
    title: 'PERFIL',
  },
  {
    path: '/books',
    title: 'LIBROS',
  },
  {
    path: '/books/addBook',
    title: 'CREAR LIBRO',
  },
  {
    path: '/books/editBook',
    title: 'EDITAR LIBRO',
    hidden: true,
  },
  {
    path: '/books/favoritesBooks',
    title: 'LIBROS FAVORITOS',
  },
  {
    path: '/books/readBooks',
    title: 'LIBROS LEIDOS',
  },
  {
    path: '/logout',
    title: 'CERRAR SESION',
  },
  {
    path: '/:pathMatch(.*)*',
    title: '404',
    hidden: true,
  },
];

export default rutas;
