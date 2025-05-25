import { defineStore } from 'pinia';

const {
  VITE_API_ORIGIN,
} = import.meta.env;

export const useBookStore = defineStore('bookService', {
  state: () => ({
    books: {},
    oneBook: {},
    favoritesBooks: {},
    readBooks: {},
  }),
  getters: {
  },
  actions: {
    getOneBook (book) {
      this.oneBook = book
    },
    async fetchBooks ({ id_book } = {}) {
      const url = new URL(`${VITE_API_ORIGIN}/books`);
      try{
        if (id_book) {
          url.searchParams.append('id_book', id_book);
        }
        console.log('url', url.toString());
        const response = await fetch(url,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          }
        );
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
    async fetchFavorites (id_user) {
      const url = new URL(`${VITE_API_ORIGIN}/favorite?id_user=${id_user}`);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching favorites: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('data', data);
        this.favoritesBooks = data.data;
      } catch (error) {
        console.error('Error fetching favorites:', error.message);
      }
    },
    async changeReadBook (id_user, id_book) {
      const url = new URL(`${VITE_API_ORIGIN}/read`);
      return await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ id_user, id_book }),
      });
    },
    async fetchReadBook (id_user) {
      const url = new URL(`${VITE_API_ORIGIN}/read?id_user=${id_user}`);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching read: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('data', data);
        this.readBooks = data.data;
      } catch (error) {
        console.error('Error fetching read:', error.message);
      }
    },
  },
});
