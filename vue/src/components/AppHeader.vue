<script setup>
  import { ref } from 'vue';
  const showMenu = ref(false);
</script>

<template>
  <v-app-bar
    class="text-white text-center pa-0 bg-transparent bg-blue-grey-darken-1"
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
      <v-btn class="text-h4" icon to="/"><v-icon left>mdi-book</v-icon></v-btn>
      BookStore
    </v-toolbar-title>

    <v-btn icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer
    v-model="showMenu"
    absolute
    class="mt-0"

    temporary
  >
    <v-list>
      <v-list-item to="/">
        <v-list-item-title>INICIO</v-list-item-title>
      </v-list-item>
      <v-list-item to="/login">
        <v-list-item-title>ENTRAR</v-list-item-title>
      </v-list-item>
      <v-list-item to="/register">
        <v-list-item-title>REGISTRARSE</v-list-item-title>
      </v-list-item>
      <v-list-item to="/books">
        <v-list-item-title>TUS LIBROS</v-list-item-title>
      </v-list-item>
      <v-list-item to="/addBook">
        <v-list-item-title>AÑADIR LIBRO</v-list-item-title>
      </v-list-item>
      <v-list-item to="/logout">
        <v-list-item-title>CERRAR SESION</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
