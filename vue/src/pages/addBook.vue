<template>
  <v-container>

    <h1 class="text-h4">Agregar un nuevo libro</h1>
    <v-form>
      <v-text-field label="Título" required type="text" />
      <v-text-field label="Autor" required type="text" />
      <v-text-field label="Género" required type="text" />
      <v-text-field label="Precio" required type="number" />
      <v-btn color="primary" @click="submitForm">Agregar Libro</v-btn>
    </v-form>
  </v-container>
</template>
