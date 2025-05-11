/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { useUserStore } from '@/stores/UserStore'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const protectedRoutes = ['/books', '/books/favoritesBooks','/books/addBook','/books/editBook', '/profile', '/logout'];

  // Verifica si la ruta actual está protegida y si el usuario no está autenticado
  if (protectedRoutes.includes(to.path) && !userStore.isLogin) {
    next({ path: '/login' }); // Redirige a /login si no está autenticado
  } else if (to.path === '/login' && userStore.isLogin) {
    // Si el usuario ya está autenticado, redirige a /profile
    next({ path: '/profile' });
  } else {
    next(); // Permite la navegación
  }
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
