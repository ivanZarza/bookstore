<script setup>
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';
</script>

<template>
  <v-container class="d-flex flex-column align-center justify-center h-100 w-60 ga-5">
    <v-row>
      <v-col class="d-flex flex-column align-center justify-center h-100 w-60 ga-5">
        <CabeceraGenerica
          descriptivo="Has cerrado sesión correctamente"
          titulo="CIERRE DE SESION"
        />
        <v-btn class="btn bg-blue-darken-4" to="/">Volver a la página principal</v-btn>
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
