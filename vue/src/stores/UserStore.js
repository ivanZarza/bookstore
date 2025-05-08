import { defineStore } from 'pinia';

const {
  VITE_API_ORIGIN,
} = import.meta.env;

export const useUserStore = defineStore('userService', {
  state: () => ({
    user: {},
  }),
  getters: {
    isLogin: state => !!state.user?.data,
  },
  actions: {
    async login (dataLogin) {
      const url = new URL(`${VITE_API_ORIGIN}/login`);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataLogin),
      });
      if (!response.ok) {
        throw new Error(`Error logging in: ${response.status} ${response.statusText}`);
      }
      this.user = await response.json();
    },
    async logout () {
      this.user = {};
    },
  },
})
