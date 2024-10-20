<template>
  <div class="home">
    <!-- Mensaje de bienvenida -->
    <h1 class="text-celeste">Bienvenido a la Aplicación de Tareas con Vue.</h1>
    <p class="text-gris">
      Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
    </p>

    <!-- Imagen del logo de Vue con clase para el efecto -->
    <img class="vue-logo" alt="Vue logo" src="../assets/logo.png" />

    <!-- Sección descriptiva de la aplicación -->
    <h3 class="text-celeste">Secciones de la Aplicación</h3>
    <ul>
      <li><strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.</li>
      <li><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</li>
      <li><strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
h3 {
  margin-top: 20px; /* Espaciado superior para el título */
}

ul {
  list-style-type: none; /* Sin viñetas */
  padding: 0; /* Sin padding */
}

li {
  margin: 10px 0; /* Espaciado vertical entre los enlaces */
}

/* Estilos para el título y el párrafo */
.text-celeste {
  color: #007BFF; /* Color celeste oscuro */
  font-size: 3.5em; /* Aumentar tamaño de letra */
  text-align: center;
}

.text-gris {
  color: gray; /* Color gris para el párrafo */
  font-size: 1.8em; /* Aumentar tamaño de letra */
}

/* Estilo para el título en celeste fosforescente */
.text-celeste-fosforescente {
  color: #00FFFF; /* Color celeste fosforescente */
  font-size: 2em; /* Aumentar tamaño de letra */
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5); /* Sombra para efecto fosforescente */
}

/* Estilos para el logo */
.vue-logo {
  width: 150px; /* Ajusta el tamaño según sea necesario */
  height: auto; /* Mantiene la proporción */
  border-radius: 50%; /* Hace el logo redondo */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para el efecto de círculo */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Efecto suave para la transformación */
}

/* Efecto al pasar el mouse */
.vue-logo:hover {
  transform: scale(1.1); /* Aumenta el tamaño al pasar el mouse */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Sombra más pronunciada al pasar el mouse */
}
</style>