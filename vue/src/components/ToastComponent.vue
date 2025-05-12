<script setup>

  const props = defineProps({
    message: {
      type: String,
      required: true,
    },
    timeout: {
      type: Number,
      default: 500,
    },
    color: {
      type: String,
      required: true,
    },
  });

  const { message, timeout, color } = props;

</script>

<template>
  <v-snackbar
    class="d-flex  align-center justify-center text-center pa-5"
    :color="color"
    :timeout="timeout"
  >
    {{ message }}
  </v-snackbar>
</template>
