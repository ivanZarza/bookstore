<template>
  <v-container class="d-flex flex-column align-center justify-center h-100 w-60 ga-5">
    <v-row>
      <v-col class="d-flex flex-column align-center justify-center h-100 w-60 ga-5">
        <CabeceraGenerica
          descriptivo="La página que estás buscando no existe"
          titulo="404 - Página no encontrada"
        />
        <h1 class="text-h2">404 - Página no encontrada</h1>
        <p>La página que estás buscando no existe.</p>
        <v-btn color="primary" @click="$router.push('/')">Volver al inicio</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>
