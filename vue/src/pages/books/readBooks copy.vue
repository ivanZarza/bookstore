<script setup>
  import { useBookStore } from '@/stores/BookStore';
  import { useUserStore } from '@/stores/UserStore';
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';

  const bookStore = useBookStore();
  console.log(useBookStore());
  const userStore = useUserStore();
  const { fetchReadBook } = bookStore;

  fetchReadBook( userStore.user?.id_user );

  async function cambiarFavorito (id_user, id_book) {
    try {
      await bookStore.changeFavorite(id_user, id_book);
      await fetchReadBook( id_user );
    } catch (error) {
      console.error('Error al cambiar el estado de leido:', error);
    }
  }

  async function cambiarleido (id_user, id_book) {
    try {
      await bookStore.changeReadBook(id_user, id_book);
      await fetchReadBook( id_user );
    } catch (error) {
      console.error('Error al cambiar el estado de leido:', error);
    }
  }
</script>

<template>

  <v-container>
    <CabeceraGenerica
      descriptivo="Aqui puedes ver todos los libros que has leido"
      titulo="TUS FAVORITOS"
    />
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn color="primary" text to="/books/">
          Volver a Libros
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="!bookStore.readBooks || bookStore.readBooks.length === 0">
      <v-col
        class="d-flex flex-column align-center justify-center"
        cols="12"
      >
        <v-icon
          class="text-h1 text-primary"
          size="200"
        >
          mdi-book-open-page-variant
        </v-icon>
        <span class="text-h5">No tienes libros leidos</span>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="book in bookStore.readBooks"
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
          <div class="position-relative">
            <v-img
              alt="Portada del libro"
              class="mx-0"
              cover
              height="300px"
              :src="book.photo || 'https://via.placeholder.com/150'"
            />
            <v-btn
              class="position-absolute top-0 start-0"
              color="white"
              elevation="2"
              icon
              @click="cambiarFavorito(userStore.user?.id_user, book.id_book)"
            >
              <v-icon color="red">
                {{ book.favorite === 1 ? 'mdi-heart' : 'mdi-heart-outline' }}
              </v-icon>
            </v-btn>
            <v-btn
              class="position-absolute"
              color="white"
              elevation="2"
              icon
              style="top: 0; right: 0;"
              @click="cambiarleido(userStore.user?.id_user, book.id_book)"
            >
              <v-icon color="green">
                {{ book.read === 1 ? 'mdi-check-circle' : 'mdi-check-circle-outline' }}
              </v-icon>
            </v-btn>
          </div>
          <v-card-title>{{ book.title }}</v-card-title>
          <v-card-subtitle>{{ book.author }}</v-card-subtitle>
          <v-card-text>
            {{ book.type }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
