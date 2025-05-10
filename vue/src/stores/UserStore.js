import { defineStore } from 'pinia';

const {
  VITE_API_ORIGIN,
} = import.meta.env;

export const useUserStore = defineStore('userService', {
  state: () => {
    const userJson = localStorage.getItem('user');
    return {
      user: userJson ? JSON.parse(userJson) : {},
    };
  },
  getters: {
    isLogin: state => !!state.user,
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
      const data = await response.json();
      this.user = data.data[0];
      localStorage.setItem('user', JSON.stringify(this.user));
      return response
    },

    async register (dataRegister) {
      const url = new URL(`${VITE_API_ORIGIN}/register`);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataRegister),
      });
      if (!response.ok) {
        throw new Error(`Error registering: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      this.user = data.data[0];
      localStorage.setItem('user', JSON.stringify(this.user));
      return response
    },
    async logout () {
      localStorage.removeItem('user');
      this.user = {};
    },
    async updateUser (user) {
      const url = new URL(`${VITE_API_ORIGIN}/usuarios`);
      return await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    },
  },
})
