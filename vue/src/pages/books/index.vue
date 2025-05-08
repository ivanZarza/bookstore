<script setup>
  import { useBookStore } from '@/stores/BookStore';
  import { useUserStore } from '@/stores/UserStore';

  const bookStore = useBookStore();
  const { fetchBooks } = bookStore;

  const userStore = useUserStore();


  fetchBooks({ id_user: userStore.user.data[0].id_user })
</script>

<template>
  <v-container>
    <h1 class="text-h4">Bienvenido a la página de libros</h1>

    <p class="text-body">
      Aquí encontrarás una amplia colección de libros para todos los gustos.
    </p>
    <pre>
      <code>
        {{ JSON.stringify(bookStore.books.data, null, 2) }}
      </code>
    </pre>
  </v-container>
</template>
