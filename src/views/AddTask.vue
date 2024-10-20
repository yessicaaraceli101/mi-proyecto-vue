<template>
  <div class="container">
      <h1 class="title">Añadir Tarea</h1>

      <!-- Formulario para agregar nueva tarea -->
      <b-form @submit.prevent="addTask" class="task-form">
          <b-input-group class="mb-3">
              <b-form-input
                  v-model="newTask"
                  placeholder="Añadir nueva tarea"
              ></b-form-input>
              <b-input-group-append>
                  <b-button variant="primary" @click="addTask">Añadir</b-button>
              </b-input-group-append>
          </b-input-group>
      </b-form>

      <!-- Lista de tareas -->
      <b-list-group v-if="tasks.length > 0" class="task-list">
          <b-list-group-item
              v-for="task in tasks"
              :key="task.id"
              class="task-item"
          >
              <div>
                  <span :class="{ 'completed-text': task.completed, 'active-text': !task.completed }">{{ task.todo }}</span>
              </div>
              <div>
                  <span v-if="!task.completed" class="status-label yellow-label">Pendiente</span>
                  <span v-if="task.completed" class="status-label green-label">Completada</span>
              </div>
              <div class="button-group">
                  <!-- Botón de completar -->
                  <b-button 
                      :variant="task.completed ? 'success' : 'outline-success'" 
                      class="complete-button" 
                      @click="toggleTaskCompletion(task)">
                      <i :class="task.completed ? 'bi bi-check-circle' : 'bi bi-circle'" 
                         class="toggle-icon">
                      </i>
                  </b-button>
                  <!-- Botón de eliminar -->
                  <b-button 
                      variant="outline-danger" 
                      class="delete-button" 
                      @click="deleteTask(task)">
                      <i class="bi bi-trash delete-icon"></i>
                  </b-button>
              </div>
          </b-list-group-item>
      </b-list-group>

      <!-- Mensaje si no hay tareas -->
      <b-alert v-if="tasks.length === 0" variant="info">
          No hay tareas añadidas todavía.
      </b-alert>
  </div>
</template>

<script>
export default {
  data() {
      return {
          newTask: '', // Nueva tarea
          tasks: []    // Lista de tareas
      };
  },
  methods: {
      // Añadir nueva tarea
      addTask() {
          if (this.newTask.trim() === '') return;

          const newTask = {
              todo: this.newTask,
              completed: false,
              id: Date.now()
          };

          // Añadir tarea a la lista
          this.tasks.unshift(newTask);
          this.newTask = ''; // Limpiar campo de entrada
      },

      // Alternar estado de completado de tarea
      toggleTaskCompletion(task) {
          task.completed = !task.completed;
      },

      // Eliminar tarea
      deleteTask(task) {
          this.tasks = this.tasks.filter(t => t.id !== task.id);
      }
  },
  mounted() {
      this.fetchTasks(); // Cargar tareas al iniciar
  }
};
</script>

<style scoped>
.container {
    text-align: center; /* Centrar el contenido */
}

.title {
    color: green; /* Título en verde */
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Sombra para el texto */
}

.task-form {
    width: 800px; /* Ancho del formulario */
    margin: 0 auto 20px; /* Centrar y agregar espacio inferior */
}

.task-list {
    width: 800px; /* Ancho del contenedor de tareas */
    margin: 0 auto;
}

.task-item {
    margin-bottom: 20px; /* Separación entre tareas */
}

.button-group {
    margin-left: 20px; /* Espacio entre botones y tarea */
    display: flex;
    justify-content: flex-end;
}

.complete-button {
    margin-right: 10px; /* Espacio a la derecha */
}

/* Texto completado */
.completed-text {
    font-weight: bold;
    text-decoration: line-through; /* Tachado */
    color: black;
}

.active-text {
    font-weight: bold;
    color: black;
}

/* Estilos de etiquetas */
.status-label {
    padding: 5px 10px;
    border-radius: 3px;
    display: inline-block;
    margin-top: 5px;
    text-align: center;
    width: 100%;
}

.yellow-label {
    background-color: yellow;
    color: white;
    width: 100px;
}

.green-label {
    background-color: green;
    color: white;
    width: 100px;
}

.complete-button.success {
    background-color: green; /* Mantener botón verde */
    color: white;
}

.delete-button {
    background-color: transparent;
    border: 2px solid red;
    padding: 5px;
    border-radius: 5px;
}

.delete-button:hover {
    background-color: red;
    color: white;
}

.delete-icon {
    color: red;
    transition: color 0.3s;
}

.delete-button:hover .delete-icon {
    color: white;
}
</style>