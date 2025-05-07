<script setup>
  import { ref } from 'vue';
  import rutas from '@/rutas/rutas';

  const showMenu = ref(false);

</script>

<template>
  <v-app-bar
    class="text-white text-center "
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
