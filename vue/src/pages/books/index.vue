<script setup>
  import { useBookStore } from '@/stores/BookStore';

  const bookStore = useBookStore();
  const { fetchBooks } = bookStore;

  // Realiza la petición para obtener los libros
  fetchBooks({ id_user: 1 });
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
