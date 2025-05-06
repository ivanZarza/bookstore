<script setup>
  import { ref, watch } from 'vue';

  // Definir las props que el componente espera recibir
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
    value: { // Prop para manejar el valor
      type: [String, Number],
      default: '',
    },
  });

  const { name, label, type, rules, value } = props;


  const emit = defineEmits(['update-value']);


  const inputValue = ref(value);


  watch(
    () => value,
    newValue => {
      inputValue.value = newValue;
    }
  );


  function updateValue (newValue) {
    emit('update-value', newValue);
  }
</script>

<template>
  <v-text-field
    v-model="inputValue"
    class="mb-3"
    :label="label"
    :name="name"
    :rules="rules"
    :type="type"
    @input="updateValue(inputValue)"
  />
</template>
