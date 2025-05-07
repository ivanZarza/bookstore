<script setup>
  import { ref } from 'vue';
  import InputGenerico from '@/components/InputGenerico.vue';
  import FormGenerico from '@/components/FormGenerico.vue';
  import BotonGenerico from '@/components/BotonGenerico.vue';
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';

  const valoresInput = ref([
    {
      name: 'name',
      label: 'Nombre de usuario',
      type: 'text',
      value: '',
      required: true,
      rules: [
        v => !!v || 'El nombre de usuario es obligatorio',
        v =>
          (v && v.length >= 2) ||
          'El nombre de usuario debe tener al menos 3 caracteres',
      ],
    },
    {
      name: 'surname',
      label: 'Apellidos',
      type: 'text',
      value: '',
      required: true,
      rules: [
        v => !!v || 'Los apellidos son obligatorios',
        v =>
          (v && v.length >= 2) ||
          'Los apellidos deben tener al menos 3 caracteres',
      ],
    },
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
      name: 'photo',
      label: 'Foto de perfil',
      type: 'text',
      value: '',
      required: true,
      rules: [
        v => !!v || 'La foto de perfil es obligatoria',
        v =>
          (v && v.length >= 3) ||
          'La foto de perfil debe tener al menos 3 caracteres',
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
    {
      name: 'password2',
      label: 'Confirmar contraseña',
      type: 'password',
      value: '',
      required: true,
      rules: [
        v => !!v || 'La confirmación de la contraseña es obligatoria',
        v =>
          (!!v && v.length >= 4) ||
          'La contraseña debe tener al menos 4 caracteres',
        v=>
          v === valoresInput.value[4].value ||
          'Las contraseñas no coinciden',
      ],
    },
  ]);
</script>

<template>
  <v-container
    class="d-flex flex-column align-center justify-start h-100 w-60 ga-3"
  >
    <CabeceraGenerica
      descriptivo="Rellena con tus datos para crear tu usuario"
      titulo="REGISTRATE"
    />
    <FormGenerico>
      <InputGenerico
        v-for="input in valoresInput"
        :key="input.name"
        v-model="input.value"
        :label="input.label"
        :name="input.name"
        :rules="input.rules"
        :type="input.type"
      />
      <template #boton>
        <BotonGenerico
          @click="
            () => {
              // Aquí puedes manejar el evento de registro
              console.log('Registrar usuario con:', valoresInput);
            }
          "
        >
          Registrarse
        </BotonGenerico>
      </template>
    </FormGenerico></v-container>
</template>
