<script setup>
  import { useBookStore } from '@/stores/BookStore';
  import { useUserStore } from '@/stores/UserStore';
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';

  const bookStore = useBookStore();
  const userStore = useUserStore();
  const { fetchBooks } = bookStore;

  // Obtener los libros del usuario
  fetchBooks({ id_user: userStore.user?.data?.id_user });
  console.log(userStore.user?.data?.id_user);
  console.log(bookStore.books?.data);
</script>

<template>
  <v-container>
    <CabeceraGenerica
      descriptivo="Aqui puedes ver todos los libros que has agregado"
      titulo="TU BIBLIOTECA"
    />
    <v-row v-if="!bookStore.books.data">
      <v-col
        class="d-flex flex-column align-center justify-center"
        cols="12"
      >
        <v-icon
          color="grey lighten-1"
          size="100"
        >
          mdi-book
        </v-icon>
        <h2 class="text-h5">No tienes libros en tu biblioteca</h2>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="book in bookStore.books.data"
        :key="book.id_book"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card
          class="mx-auto"
          height="auto"
          width="250px"
        >
          <v-img
            alt="Portada del libro"
            class="mx-0"
            cover
            height="300px"
            :src="book.photo || 'https://via.placeholder.com/150'"
          />

          <v-card-title>{{ book.title }}</v-card-title>

          <v-card-subtitle>{{ book.author }}</v-card-subtitle>

          <v-card-text>
            {{ book.type }}
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" text>Ver más</v-btn>
            <v-btn color="secondary" text>Comprar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>
