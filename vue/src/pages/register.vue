<template>
  <v-container>
    <h1 class="text-h4">¡Bienvenido a la página de registro!</h1>
    <p class="text-body">
      Aquí podrás registrarte para acceder a todas nuestras funcionalidades.
    </p>
  </v-container>
  <v-form>
    <v-text-field
      label="Nombre de usuario"
      required
    />
    <v-text-field
      label="Correo electrónico"
      required
      type="email"
    />
    <v-text-field
      label="Contraseña"
      required
      type="password"
    />
    <v-btn color="primary" type="submit">Registrarse</v-btn>
  </v-form>
</template>
