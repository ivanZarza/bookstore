<script setup>
  import { reactive,ref } from 'vue';
  import InputGenerico from '@/components/InputGenerico.vue';
  import FormGenerico from '@/components/FormGenerico.vue';
  import BotonGenerico from '@/components/BotonGenerico.vue';
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';
  import { useBookStore } from '@/stores/BookStore';
  import { useUserStore } from '@/stores/UserStore';

  const bookStore = useBookStore();
  const { addBook } = bookStore;

  const userStore = useUserStore();
  const toastError = ref(false);
  const toastSuccess = ref(false);

  const valoresInput = reactive([
    {
      name: 'title',
      label: 'Título del libro',
      type: 'text',
      value: '',
      required: true,
      rules: [
        v => !!v || 'El título es obligatorio',
        v =>
          (v && v.length >= 2) ||
          'El título debe tener al menos 3 caracteres',
      ],
    },
    {
      name: 'author',
      label: 'Autor del libro',
      type: 'text',
      value: '',
      required: true,
      rules: [
        v => !!v || 'El autor es obligatorio',
        v =>
          (v && v.length >= 2) ||
          'El autor debe tener al menos 3 caracteres',
      ],
    },
    {
      name: 'price',
      label: 'Precio del libro',
      type: 'number',
      value: '',
      required: true,
      rules: [
        v => !!v || 'El precio es obligatorio',
        v =>
          (v && v > 0) ||
          'El precio debe ser un número positivo',
      ],
    },
    {
      name: 'photo',
      label: 'URL de la foto del libro',
      type: 'text',
      value: '',
      required: true,
      rules: [
        v => !!v || 'La URL de la foto es obligatoria',
        v =>
          (v && v.length >= 3) ||
          'La URL de la foto debe tener al menos 3 caracteres',
      ],
    },
  ]);

  const valoresSelect = reactive(
    {
      name: 'type',
      label: 'Tipo de tapa',
      value: '',
      items: [
        'tapa dura' ,
        'tapa blanda',
      ],
      rules: [
        v => !!v || 'El tipo de tapa es obligatorio',
        v => ['tapa dura', 'tapa blanda'].includes(v) || 'Selecciona un tipo de tapa',
      ],
    },
  );

  async function addNewBook () {
    const newBook = {
      id_user: userStore.user?.id_user,
      title: valoresInput[0].value,
      author: valoresInput[1].value,
      price: valoresInput[2].value,
      photo: valoresInput[3].value,
      type: valoresSelect.value,
    }
    try{
      console.log('book', newBook);
      const response = await addBook({ book:newBook });
      if(!response.ok){
        toastError.value = true;
        throw new Error('Error al crear el libro');
      }
      toastSuccess.value = true;
      console.log('Libro creado exitosamente', response);
    }catch(error){
      toastError.value = true;
      console.error('Error de validación:', error);
    }
  }
  </script>

<template>
  <v-container class="d-flex flex-column align-center justify-start h-100 w-60 ga-5">
    <ToastComponent
      v-model="toastError"
      color="red"
      message="Error al crear el libro"
      :timeout="3000"
    />
    <ToastComponent
      v-model="toastSuccess"
      color="green"
      message="Libro creado exitosamente"
      :timeout="3000"
    />
    <CabeceraGenerica
      descriptivo="Introduce los datos del libro"
      titulo="AÑADE UN LIBRO"
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
      <template #select>
        <SelectGenerico
          v-model="valoresSelect.value"
          :items="valoresSelect.items"
          :label="valoresSelect.label"
          :name="valoresSelect.name"
          :rules="valoresSelect.rules"
        />
      </template>
      <template #boton>
        <BotonGenerico @click="addNewBook">
          Añadir libro
        </BotonGenerico>
      </template>
    </FormGenerico>
  </v-container>
</template>
