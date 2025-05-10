<script setup>
  import { reactive } from 'vue';
  import CabeceraGenerica from '@/components/CabeceraGenerica.vue';
  import FormGenerico from '@/components/FormGenerico.vue';
  import BotonGenerico from '@/components/BotonGenerico.vue';
  import InputGenerico from '@/components/InputGenerico.vue';
  import SelectGenerico from '@/components/SelectGenerico.vue';
  import { useBookStore } from '@/stores/BookStore';
  import router from '@/router';

  const bookStore = useBookStore();
  const { updateBook } = bookStore;
  console.log(bookStore.oneBook);

  async function editarLibro () {
    const nuevoLibro = {
      id_book: bookStore.oneBook.id_book,
      id_user: bookStore.oneBook.id_user,
      title: valoresInput[0].value,
      author: valoresInput[1].value,
      price: valoresInput[2].value,
      type: valoresSelect.value,
      photo: valoresInput[3].value,
    };
    try {
      const response = await updateBook({ book: nuevoLibro });
      if (!response.ok){
        throw new Error('Error al actualizar el libro');
      }
      await bookStore.fetchBooks({ id_user: bookStore.oneBook.id_user });
      router.push({ name: '/books/' });
      console.log(response);
    } catch (error) {
      console.error('Error de validación:', error);
      return;
    }
  }

  const valoresInput = reactive([
    {
      name: 'title',
      label: 'Título del libro',
      type: 'text',
      value: bookStore.oneBook.title,
      required: true,
      rules: [
        v => !!v || 'El título es obligatorio',
        v =>
          (v && v.length >= 2) || 'El título debe tener al menos 3 caracteres',
      ],
    },
    {
      name: 'author',
      label: 'Autor del libro',
      type: 'text',
      value: bookStore.oneBook.author,
      required: true,
      rules: [
        v => !!v || 'El autor es obligatorio',
        v =>
          (v && v.length >= 2) || 'El autor debe tener al menos 3 caracteres',
      ],
    },
    {
      name: 'price',
      label: 'Precio del libro',
      type: 'number',
      value: bookStore.oneBook.price,
      required: true,
      rules: [
        v => !!v || 'El precio es obligatorio',
        v => (v && v > 0) || 'El precio debe ser un número positivo',
      ],
    },
    {
      name: 'photo',
      label: 'URL de la foto del libro',
      type: 'text',
      value: bookStore.oneBook.photo,
      required: true,
      rules: [
        v => !!v || 'La URL de la foto es obligatoria',
        v =>
          (v && v.length >= 3) ||
          'La URL de la foto debe tener al menos 3 caracteres',
      ],
    },
  ]);

  const valoresSelect = reactive({
    name: 'type',
    label: 'Tipo de tapa',
    value: bookStore.oneBook.type,
    items: ['Selecciona un tipo de tapa','tapa dura', 'tapa blanda'],
    rules: [
      v => !!v || 'El tipo de tapa es obligatorio',
      v =>
        ['tapa dura', 'tapa blanda'].includes(v) || 'Selecciona un tipo de tapa',
    ],
  });
</script>

<template>
  <v-container class="d-flex flex-column align-center justify-start h-100 w-60 ga-5">
    <CabeceraGenerica
      descriptivo="Introduce los datos del libro"
      titulo="MODIFICAR LIBRO"
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
        <BotonGenerico
          @click="editarLibro"
        >
          Editar libro
        </BotonGenerico>
      </template>
    </FormGenerico>
  </v-container>
</template>
