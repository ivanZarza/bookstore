<script setup>
  import { ref } from 'vue';
  import { useUserStore } from '@/stores/UserStore';
  import { useBookStore } from '@/stores/BookStore';
  import rutas from '@/rutas/rutas';
  import router from '@/router';

  const userStore = useUserStore();
  const bookStore = useBookStore();

  const showMenu = ref(false);
  const showDialog = ref(false);

  // Filtrar rutas según el estado de autenticación
  const visibleRoutes = rutas.filter(route => {
    if (route.path === '/') {
      // Siempre incluir la ruta de Inicio
      return true;
    }
    if (!userStore.isLogin) {
      // Mostrar solo las rutas de login y register si no está logueado
      return route.path === '/login' || route.path === '/register';
    } else {
      // Mostrar todas las rutas si está logueado
      return route.path !== '/login' && route.path !== '/register';
    }
  });

  const cerrarSesion = () => {
    bookStore.clearBooks();
    userStore.logout();
    localStorage.removeItem('user');
    showDialog.value = false;
    router.push({ name: '/login' });
  };
</script>

<template>
  <v-app-bar
    height="120"
    style="
      background-image: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
      background-size: cover;
    "
  >
    <v-btn icon @click="showMenu = !showMenu">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn icon to="/books/favoritesBooks">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-toolbar-title
      class="text-h6 text-sm-h3 d-flex items-center justify-center pr-10"
    >
      <router-link class="text-decoration-none text-white" to="/books/">
        <v-icon left>mdi-book-open-page-variant</v-icon>
      </router-link>
      <router-link class="text-decoration-none text-white" to="/">
        BookStore
      </router-link>
    </v-toolbar-title>
    <div class="d-flex align-center justify-center">
      <!--       <v-btn><span class="text-caption mt-1">Cerrar sesión</span></v-btn> -->
      <v-btn icon @click="userStore.isLogin && (showDialog = true)">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </div>
    <v-dialog v-model="showDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Confirmar cierre de sesión</v-card-title>
        <v-card-text>¿Estás seguro de que deseas cerrar sesión?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="showDialog = false">Cancelar</v-btn>
          <v-btn color="red" text @click="cerrarSesion">Cerrar sesión</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
  <v-navigation-drawer
    v-model="showMenu"
    fixed
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(ruta,index) in visibleRoutes"
        :key="index"
        :to="ruta.path"
      >
        <v-list-item-title>{{ ruta.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
