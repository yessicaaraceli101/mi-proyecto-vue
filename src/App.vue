<template>
  <div id="app">
    <!-- Barra de navegación en la parte superior -->
    <nav class="navbar navbar-expand-lg" style="background-color: #007BFF;">
      <a class="navbar-brand" href="#" style="text-decoration: none; color: white;">
        <img :src="logo" alt="Logo" width="30" height="30" class="d-inline-block align-top">
        <span>Gestor de tareas</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/addtask">
              <i class="bi bi-plus-circle"></i> Añadir Tarea
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tasklist">
              <i class="bi bi-list-ul"></i> Lista de Tareas
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/combined">
              <i class="bi bi-layout-split"></i> Vista Combinada
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view />
  </div>
</template>

<script>
import logo from '@/assets/logo.png'; // Importar la imagen del logo

export default {
  data() {
    return {
      logo, // Guardar la ruta de la imagen
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9f9f9; /* Fondo más claro para mejor contraste */
  min-height: 100vh; /* Para que el contenido ocupe al menos toda la altura de la ventana */
  padding: 20px; /* Espacio interno */
}

.navbar {
  padding: 20px;
}

.navbar-brand {
  color: white; /* Color blanco */
  text-decoration: none; /* Sin subrayado */
}

.nav-link {
  color: #FFFFFF !important; /* Color blanco claro */
  text-decoration: none; /* Sin subrayado */
  font-weight: 600; /* Grosor de letras */
  transition: color 0.3s; /* Transición suave para el cambio de color */
}

.nav-link:hover {
  color: #FFD700 !important; /* Color amarillo oscuro al pasar el mouse */
}

.nav-link.router-link-exact-active {
  color: #42b983; /* Color para el enlace activo */
}
</style>