<script setup>
  import { reactive, ref } from 'vue';
  import InputGenerico from '@/components/InputGenerico.vue';
  import FormGenerico from '@/components/FormGenerico.vue';
  import BotonGenerico from '@/components/BotonGenerico.vue';
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';
  import ToastComponent from '@/components/ToastComponent.vue';
  import { useUserStore } from '@/stores/UserStore';
  import router from '@/router';

  const userStore = useUserStore();
  const toastError = ref(false);
  const toastSuccess = ref(false);

  async function login () {
    const dataLogin = {
      email: valoresInput[0].value,
      password: valoresInput[1].value,
    };
    try {
      const response = await userStore.login(dataLogin);
      if (!response.ok) {
        toastError.value = true;
        throw new Error('Error al iniciar sesión');
      }
      toastSuccess.value = true;
      setTimeout(() => {
        router.push({ name: '/profile' });
      }, 2000);
      console.log('Inicio de sesión exitoso', response);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      toastError.value = true;
    }
  }
  const valoresInput = reactive([
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
  <v-container
    class="d-flex flex-column align-center justify-start h-100 w-60 ga-5"
  >
    <v-row>
      <v-col
        class="d-flex flex-column align-center justify-end h-100 w-60 ga-5"
      >
        <ToastComponent
          v-model="toastSuccess"
          color="green"
          message="Inicio de sesión exitoso"
          :timeout="3000"
        />
        <ToastComponent
          v-model="toastError"
          color="red"
          message="Fallo al iniciar sesión"
          :timeout="3000"
        />
      </v-col>
    </v-row>
    <CabeceraGenerica
      descriptivo="Introduce tus datos para iniciar sesion"
      titulo="INICIA SESION"
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
        <BotonGenerico @click="login"> Iniciar sesión </BotonGenerico>
      </template>
    </FormGenerico>
    <v-row class="d-flex justify-center">
      <v-col class="text-center" cols="12">
        <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
      </v-col>
    </v-row>
  </v-container>
</template>
