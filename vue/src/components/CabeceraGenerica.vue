<script setup>

  const props = defineProps({
    descriptivo: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
  });

  const { descriptivo, titulo } = props;
</script>

<template>
  <v-container class="d-flex flex-column align-center ga-2">
    <h1 class="text-h2"> {{ titulo }} </h1>
    <p class="text-h4">{{ descriptivo }}</p>
  </v-container>
</template>
