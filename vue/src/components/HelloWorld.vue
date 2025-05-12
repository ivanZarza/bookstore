<template>
  <v-container class="fill-height" max-width="900">
    <!-- Encabezado llamativo -->
    <v-img
      class="mb-4"
      cover
      height="300"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row class="fill-height d-flex align-center justify-center">
        <v-col class="text-center">
          <h1 class="text-h2 font-weight-bold text-white">Bienvenido a Mi App</h1>
          <p class="text-subtitle-1 text-white">Tu solución para [descripción breve de la app]</p>
        </v-col>
      </v-row>
    </v-img>

    <!-- Características principales -->
    <v-row class="mt-8">
      <v-col
        v-for="feature in features"
        :key="feature.title"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card class="pa-4" color="primary" dark>
          <v-icon class="mb-2" large>{{ feature.icon }}</v-icon>
          <h3 class="text-h6 font-weight-bold">{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Llamada a la acción (CTA) -->
    <v-container class="text-center mt-8">
      <h2 class="text-h4 font-weight-bold">¡Empieza ahora!</h2>
      <p class="text-subtitle-1">Regístrate y descubre todo lo que nuestra app tiene para ofrecerte.</p>
      <v-btn class="mt-4" color="primary" large to="/register">Regístrate</v-btn>
    </v-container>

    <!-- Testimonios -->
    <v-row class="mt-8">
      <v-col v-for="testimonial in testimonials" :key="testimonial.name" cols="12" sm="6">
        <v-card class="pa-4">
          <v-avatar class="mb-2" size="56">
            <img alt="Avatar" :src="testimonial.avatar">
          </v-avatar>
          <h3 class="text-h6 font-weight-bold">{{ testimonial.name }}</h3>
          <p class="text-body-2">{{ testimonial.comment }}</p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Pie de página -->
    <v-footer color="primary" dark>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <h3 class="text-h6">Mi App</h3>
            <p>© 2023 Mi App. Todos los derechos reservados.</p>
          </v-col>
          <v-col class="text-right" cols="12" sm="6">
            <v-btn icon to="https://facebook.com">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon to="https://twitter.com">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon to="https://instagram.com">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-container>
</template>

<script setup>
  const features = [
    {
      icon: 'mdi-speedometer',
      title: 'Rápido y eficiente',
      description: 'Nuestra app está optimizada para ofrecer el mejor rendimiento.',
    },
    {
      icon: 'mdi-shield-check',
      title: 'Seguridad',
      description: 'Tus datos están protegidos con los más altos estándares.',
    },
    {
      icon: 'mdi-account-group',
      title: 'Fácil de usar',
      description: 'Una interfaz intuitiva diseñada para todos los usuarios.',
    },
  ];

  const testimonials = [
    {
      name: 'Juan Pérez',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      comment: 'Esta app cambió mi vida. Es increíblemente fácil de usar.',
    },
    {
      name: 'Ana Gómez',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      comment: 'La mejor solución que he encontrado para [problema que resuelve la app].',
    },
  ];
</script>
