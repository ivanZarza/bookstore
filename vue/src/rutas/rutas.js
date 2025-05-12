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
    path: '/logout',
    title: 'CERRAR SESION',
    hidden: true,
  },
  {
    path: '/:pathMatch(.*)*',
    title: '404',
    hidden: true,
  },
];

export default rutas;
