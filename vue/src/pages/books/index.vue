<script setup>
  import { ref } from 'vue';
  import { useBookStore } from '@/stores/BookStore';
  import { useUserStore } from '@/stores/UserStore';
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';
  import router from '@/router';

  const bookStore = useBookStore();
  const userStore = useUserStore();
  const { fetchBooks, getOneBook } = bookStore;
  const showDialog = ref(false);
  const libroAEliminar = ref(null);
  fetchBooks();

  function editarLibro (book) {
    getOneBook(book);
    router.push({ name: '/books/editBook' });
  }

  async function eliminarLibro () {
    if (!libroAEliminar.value) {
      console.error('No se ha seleccionado un libro para eliminar');
      return;
    }
    try {
      const response = await bookStore.deleteBook(libroAEliminar.value);
      if (!response.ok) {
        throw new Error('Error al eliminar el libro');
      }
      showDialog.value = false;
      fetchBooks({ id_user: userStore.user?.id_user });
    } catch (error) {
      console.error('Error de validación:', error);
      return;
    }
  }

  async function cambiarFavorito (id_book) {
    try {
      await bookStore.changeFavorite( id_book);
      await fetchBooks();
    } catch (error) {
      console.error('Error al cambiar el estado de favorito:', error);
    }
  }

  async function cambiarleido (id_book) {
    try {
      await bookStore.changeReadBook( id_book);
      await fetchBooks();
    } catch (error) {
      console.error('Error al cambiar el estado de leído:', error);
    }
  }
</script>

<template>
  <v-container>
    <CabeceraGenerica
      descriptivo="Aqui puedes ver todos los libros que has agregado"
      titulo="TU BIBLIOTECA"
    />
    <v-row v-if="!bookStore.books || bookStore.books.length === 0">
      <v-col
        class="d-flex flex-column align-center justify-center"
        cols="12"
      >
        <v-icon
          color="grey lighten-1"
          size="100"
          to="/books"
        >
          mdi-book-open-page-variant
        </v-icon>

        <h2 class="text-h5">No tienes libros en tu biblioteca</h2>
      </v-col>
    </v-row>
    <v-row v-else>

      <v-col
        v-for="book in bookStore.books"
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
                {{ book.readed === 1 ? 'mdi-check-circle' : 'mdi-check-circle-outline' }}
              </v-icon>
            </v-btn>
          </div>
          <v-card-title>{{ book.title }}</v-card-title>
          <v-card-subtitle>{{ book.author }}</v-card-subtitle>
          <v-card-text>
            {{ book.type }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="editarLibro(book)">Editar</v-btn>
            <v-btn color="secondary" text @click="showDialog = true; libroAEliminar = book.id_book">Eliminar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="showDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Se va a eliminar el libro</v-card-title>
        <v-card-text>¿Estás seguro que quieres borrar el libro?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="showDialog = false">Cancelar</v-btn>
          <v-btn color="red" text @click="eliminarLibro">Borrar libro</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>
