import { defineStore } from 'pinia';

const {
  VITE_API_ORIGIN,
} = import.meta.env;

export const useBookStore = defineStore('bookService', {
  state: () => ({
    books: {},
    oneBook: {},
    favoritesBooks: {},
  }),
  getters: {
  },
  actions: {
    getOneBook (book) {
      this.oneBook = book
    },
    async fetchBooks ({ id_user, id_book } = {}) {
      const url = new URL(`${VITE_API_ORIGIN}/books`);
      try{
        if (id_user) {
          url.searchParams.append('id_user', id_user);
        }
        if (id_book) {
          url.searchParams.append('id_book', id_book);
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching books: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        this.books = data.data;
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    },
    async addBook (book) {
      const url = new URL(`${VITE_API_ORIGIN}/books`);
      return await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
    },

    async updateBook (book) {
      return await fetch(`${VITE_API_ORIGIN}/books`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( book ),
      });
    },
    async deleteBook (id_book, id_user) {
      const url = new URL(`${VITE_API_ORIGIN}/books`);
      return await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ id_book, id_user }),
      });
    },
    async clearBooks () {
      this.books = {};
    },
    async changeFavorite (id_user, id_book) {
      const url = new URL(`${VITE_API_ORIGIN}/favorite`);
      return await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ id_user, id_book }),
      });
    },
  },
});
