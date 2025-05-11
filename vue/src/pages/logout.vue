<script setup>
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';
  import { useBookStore } from '@/stores/BookStore';
  import { useUserStore } from '@/stores/UserStore';
  import { ref } from 'vue';
  import router from '@/router';

  const bookStore = useBookStore();
  const userStore = useUserStore();
  const showDialog = ref(false);

  const cerrarSesion = () => {
    bookStore.clearBooks();
    userStore.logout();
    localStorage.removeItem('user');
    showDialog.value = false;
    router.push({ name: '/login' });
  };
</script>

<template>
  <v-container class="d-flex flex-column align-center justify-center h-100 w-60 ga-5">
    <v-row>
      <v-col class="d-flex flex-column align-center justify-center h-100 w-60 ga-5">
        <CabeceraGenerica
          descriptivo="Vas a cerrar sesión"
          titulo="CIERRE DE SESION"
        />
        <v-btn color="primary" @click="showDialog =true"> Cerrar sesion</v-btn>
        <v-dialog v-model="showDialog" max-width="400">
          <v-card>
            <v-card-title class="text-h5">Confirmar cierre de sesión</v-card-title>
            <v-card-text>¿Estás seguro de que deseas cerrar sesión?</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" text @click="showDialog = false">Cancelar</v-btn>
              <v-btn color="red" text @click="cerrarSesion">Cerrar sesión</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.btn {
  color: white;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.btn:hover {
  transform: scale(1.05);
  background-color: #78909C;
}
</style>
