<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <h1 class="text-h2">404 - Página no encontrada</h1>
        <p>La página que estás buscando no existe.</p>
        <v-btn color="primary" @click="$router.push('/')">Volver al inicio</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
h1 {
  margin-top: 20px;
}
</style>
