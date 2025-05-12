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
    <h1 class=" text-h4 text-sm-h3 text-md-h2"> {{ titulo }} </h1>
    <p class=" text-h7 text-sm-h5 text-md-h4">{{ descriptivo }}</p>
  </v-container>
</template>
