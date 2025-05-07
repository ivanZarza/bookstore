<script setup>
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  });

  const { items, label } = props;

  const selectValue = defineModel()
</script>

<template>
  <v-select
    v-model="selectValue"
    :items="items"
    :label="label"
  />
</template>
