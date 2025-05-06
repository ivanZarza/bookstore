<template>
  <v-container>

    <h1 class="text-h4">Perfil de Usuario</h1>

    <p class="text-body">Aquí puedes ver y editar tu información personal.</p>

    <v-form>
      <v-text-field v-model="name" label="Nombre">Nombre</v-text-field>
      <v-text-field v-model="email" label="Correo Electrónico">Correo</v-text-field>
      <v-btn color="primary" @click="updateProfile">Actualizar Perfil</v-btn>
    </v-form>
  </v-container>
</template>
<script setup>
  import { ref } from 'vue';

  const name = ref('');
  const email = ref('');
</script>
