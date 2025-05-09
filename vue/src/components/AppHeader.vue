<script setup>
  import { ref } from 'vue';
  import rutas from '@/rutas/rutas';
  import { useUserStore } from '@/stores/UserStore';
  import { useBookStore } from '@/stores/BookStore';
  import router from '@/router';

  const userStore = useUserStore();
  const bookStore = useBookStore();

  const showMenu = ref(false);
  const showDialog = ref(false);

  const cerrarSesion = () => {
    userStore.logout();
    console.log(bookStore.books.data);
    bookStore.clearBooks();
    localStorage.removeItem('user');
    showDialog.value = false;
    router.push({ name: '/login' });
  };

</script>

<template>
  <v-app-bar
    class="text-white text-center"
    height="120"
    style="
      background-image: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
      background-size: cover;
    "
  >
    <v-btn icon @click="showMenu = !showMenu">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn icon to="/books">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-toolbar-title
      class="text-h3 d-flex items-center justify-center"
      style="line-height: normal"
    >
      <v-icon left>mdi-book</v-icon>
      BookStore
    </v-toolbar-title>
    <div class="d-flex align-center justify-center">
      <!--       <v-btn><span class="text-caption mt-1">Cerrar sesión</span></v-btn> -->
      <v-btn icon @click="showDialog = true">
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
        v-for="(ruta,index) in rutas"
        :key="index"
        :to="ruta.path"
      >
        <v-list-item-title>{{ ruta.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
