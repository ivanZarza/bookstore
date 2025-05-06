<script setup>
  import { ref } from 'vue';
  import InputGenerico from '@/components/InputGenerico.vue';
  import FormGenerico from '@/components/FormGenerico.vue';
  import BotonGenerico from '@/components/BotonGenerico.vue';
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';

  const valoresInput = ref([
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      value: '',
      required: true,
      rules: [
        v => !!v || 'El correo electrónico es obligatorio',
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido',
      ],
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      value: '',
      required: true,
      rules: [
        v => !!v || 'La contraseña es obligatoria',
        v =>
          (!!v && v.length >= 4) ||
          'La contraseña debe tener al menos 6 caracteres',
      ],
    },
  ]);
</script>

<template>
  <v-container class="d-flex flex-column align-center justify-start h-100 w-auto ga-5">
    <CabeceraGenerica descriptivo="Introduce tus datos" titulo="Entra" />
    <FormGenerico>
      <InputGenerico
        v-for="(input, index) in valoresInput"
        :key="input.name"
        :label="input.label"
        :name="input.name"
        :rules="input.rules"
        :type="input.type"
        :value="input.value"
        @update-value="(newValue) => (valoresInput[index].value = newValue)"
      />
      <template #boton>
        <BotonGenerico
          @click="
            () => {
              // Aquí puedes manejar el evento de inicio de sesión
              console.log('Iniciar sesión con:', valoresInput);
            }
          "
        >
          Iniciar sesión
        </BotonGenerico>
      </template>
    </FormGenerico>
  </v-container>
</template>
