<script setup>


  defineEmits(['click']);


</script>

<template>
  <v-btn
    class="btn bg-blue-darken-4 w-50 ml-2"
    @click="$emit('click')"
  >
    <slot />
  </v-btn>
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

@media (max-width: 600px) {
  .btn {
    font-size: 10px; /* Tamaño más pequeño en pantallas pequeñas */
  }
}
</style>
