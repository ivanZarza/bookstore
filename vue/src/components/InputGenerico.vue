<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: Array,
      default: () => [],
    },
  });

  const { name, label, type, rules } = props;
  const inputValue = defineModel()
</script>


<template>
  <v-text-field
    v-model="inputValue"
    class="mb-2 text-sm-sm text-md-md"
    :label="label"
    :name="name"
    :rules="rules"
    :type="type"
  />
</template>
