import { defineStore } from 'pinia';

const {
  VITE_API_ORIGIN,
} = import.meta.env;

export const useBookStore = defineStore('bookService', {
  state: () => ({
    books: [],
  }),
  getters: {
    getBooks: state => state.books,
    getBook: state => state.book,
  },
  actions: {
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
        this.books = await response.json();
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    },
    async addBook (book) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
      this.fetchBooks();
      return response;
    },
    async updateBook (book) {

      const response = await fetch(`${url}/${book.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
      this.fetchBooks();
      return response;
    },
    async deleteBook (id) {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      this.fetchBooks();
      return response;
    },
  },
});
