<script setup>

</script>

<template>
  <v-form class="h-auto d-flex flex-column w-100 w-sm-50">
    <slot />
    <slot name="select" />
    <slot name="boton" />
  </v-form>
</template>
