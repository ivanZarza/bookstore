<script setup>
  import { reactive,ref } from 'vue';
  import InputGenerico from '@/components/InputGenerico.vue';
  import FormGenerico from '@/components/FormGenerico.vue';
  import BotonGenerico from '@/components/BotonGenerico.vue';
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';
  import ToastComponent from '@/components/ToastComponent.vue';
  import { useUserStore } from '@/stores/UserStore';


  const userStore = useUserStore();
  console.log(userStore.isLogin);
  const user = userStore.isLogin ? userStore.user : {
    name: '',
    last_name: '',
    email: '',
    photo: '',
  };
  const toastError = ref(false);
  const toastSuccess = ref(false);

  async function modificarUsario () {
    const nuevoUsuario = {
      id_user: userStore.user.id_user,
      name: valoresInput[0].value,
      last_name: valoresInput[1].value,
      email: valoresInput[2].value,
      photo: valoresInput[3].value,
      password: valoresInput[4].value,
    };
    try {
      const response = await userStore.updateUser(nuevoUsuario);
      if (!response.ok) {
        toastError.value = true;
        throw new Error('Error al actualizar el usuario');
      }
      await userStore.login({
        email: valoresInput[2].value,
        password: valoresInput[4].value,
      });
      toastSuccess.value = true;
      localStorage.setItem('user', JSON.stringify(userStore.user));
      location.reload();
      console.log('Usuario actualizado exitosamente', response);
    } catch (error) {
      toastError.value = true;
      console.error('Error de validación:', error);
    }
  }

  const valoresInput = reactive([
    {
      name: 'name',
      label: 'Nombre',
      type: 'text',
      value: user.name || '',
      required: true,
      rules: [
        v => !!v || 'El nombre de usuario es obligatorio',
        v =>
          (v && v.length >= 2) ||
          'El nombre de usuario debe tener al menos 3 caracteres',
      ],
    },
    {
      name: 'last_name',
      label: 'Apellidos',
      type: 'text',
      value: user.last_name || '',
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
      value: user.email || '',
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
      value: user.photo || '',
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
          'La contraseña debe tener al menos 4 caracteres',
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
          v === valoresInput[4].value || 'Las contraseñas no coinciden',
      ],
    },
  ]);

</script>

<template>
  <v-container class="d-flex flex-column align-center justify-start h-100 w-60 ga-5">
    <ToastComponent
      v-model="toastError"
      color="red"
      message="Error al actualizar el usuario"
      :timeout="3000"
    />
    <ToastComponent
      v-model="toastSuccess"
      color="green"
      message="Usuario actualizado exitosamente"
      :timeout="3000"
    />
    <CabeceraGenerica descriptivo="Aqui podras ver tus datos  y cambiarlos  si  es necesario" titulo="TU PERFIL" />
    <CabeceraGenerica
      class="text-center"
      :descriptivo="'En este formulario podras cambiar tus datos'"
      :titulo="user.name + ' ' + user.last_name"
    />
    <img
      alt="Foto de perfil"
      class="rounded-circle mb-4"
      :src="user.photo"
      style="width: 200px; height: 200px;"
    >
    <h3 class="text-center">
      {{ user.email }}
    </h3>
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
      <BotonGenerico @click="modificarUsario">
        Guardar Cambios
      </BotonGenerico>
    </FormGenerico>
  </v-container>
</template>
