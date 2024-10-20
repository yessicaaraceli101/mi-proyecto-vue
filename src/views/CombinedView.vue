<template>
  <div class="container d-flex flex-column align-items-center mt-4">
      <h1 class="text-celeste">Lista de Tareas</h1>

      <!-- Contenedor del formulario para añadir nueva tarea -->
      <div class="add-task-container">
          <b-form @submit.prevent="addTask">
              <b-input-group class="mb-3">
                  <b-form-input
                      v-model="newTask"
                      placeholder="Añadir nueva tarea"
                  ></b-form-input>
                  <b-input-group-append>
                      <b-button variant="primary" @click="addTask">
                          <i class="bi bi-plus-circle me-2"></i>Añadir
                      </b-button>
                  </b-input-group-append>
              </b-input-group>
          </b-form>
      </div>

      <!-- Lista de tareas existentes -->
      <b-alert v-if="tasks.length === 0" variant="info">
          No hay tareas añadidas todavía.
      </b-alert>

      <b-list-group v-if="tasks.length > 0" class="task-list">
          <b-list-group-item
              v-for="task in tasks"
              :key="task.id"
              :class="{'completed-task': task.completed}"
              class="d-flex justify-content-between align-items-center mb-4 task-item"
          >
              <div class="flex-grow-1 text-center fw-bold">
                  {{ task.todo }}
                  <div class="mt-2">
                      <span :class="task.completed ? 'badge bg-success' : 'badge bg-warning'">
                          {{ task.completed ? 'Completada' : 'Pendiente' }}
                      </span>
                  </div>
              </div>
              <div class="task-actions">
                  <b-button 
                      variant="success" 
                      @click="toggleTaskCompletion(task)" 
                      class="check-button me-2"
                      :class="{ 'active': task.completed }"
                  >
                      <i class="bi bi-check-circle"></i>
                  </b-button>
                  <b-button 
                      variant="danger" 
                      @click="deleteTask(task)"
                      class="delete-button"
                  >
                      <i class="bi bi-trash"></i>
                  </b-button>
              </div>
          </b-list-group-item>
      </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
      return {
          newTask: '', // Para almacenar la nueva tarea ingresada
          tasks: []    // Lista para almacenar las tareas existentes
      };
  },
  methods: {
      // Método para añadir una nueva tarea
      async addTask() {
          if (this.newTask.trim() === '') return;

          const newTask = {
              todo: this.newTask,
              completed: false,
              id: Date.now() // Asegúrate de que el ID sea único
          };

          // Añadir la nueva tarea localmente
          this.tasks.unshift(newTask);
          this.newTask = '';

          // Aquí puedes realizar una petición POST a la API para guardar la tarea en el servidor.
          try {
              const response = await fetch('https://dummyjson.com/todos/add', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(newTask)
              });
              const data = await response.json();
              console.log('Tarea añadida:', data);
          } catch (error) {
              console.error('Error al añadir la tarea:', error);
          }
      },

      // Método para obtener las tareas de la API
      async fetchTasks() {
          try {
              const response = await fetch('https://dummyjson.com/todos');
              const data = await response.json();
              this.tasks = data.todos; // Asignar las tareas obtenidas desde la API
          } catch (error) {
              console.error('Error al obtener las tareas:', error);
          }
      },

      // Método para alternar el estado de completado de una tarea
      toggleTaskCompletion(task) {
          task.completed = !task.completed;
          // Aquí puedes hacer una petición PUT/PATCH a la API para actualizar la tarea.
      },

      // Método para eliminar una tarea
      deleteTask(task) {
          this.tasks = this.tasks.filter(t => t.id !== task.id);
          // Aquí puedes hacer una petición DELETE a la API.
      }
  },
  mounted() {
      // Llamar al método que obtiene las tareas cuando el componente se monta
      this.fetchTasks();
  }
};
</script>

<style scoped>
/* Aquí puedes agregar estilos personalizados */
.completed-task {
  text-decoration: line-through;
  color: gray;
}

/* Cambiar el color del título a celeste y agregar un sombreado */
.text-celeste {
    color: #00BFFF; /* Color celeste */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Sombreado */
}

/* Configurar el contenedor del flexbox con un ancho fijo de 800px y centrado */
.add-task-container {
    width: 800px; /* Ancho fijo de 800px */
}

/* Configuración de la lista de tareas */
.task-list {
    width: 100%; /* Ancho máximo para el contenedor */
    max-width: 800px; /* Máximo ancho de 800px */
    margin: 0 auto; /* Centrando horizontalmente */
}

.task-item {
    width: 100%; /* Ancho completo del task-item */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
}

.task-actions {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Cambiar el color de los botones al pasar el mouse */
.task-item:hover {
    background-color: #e9e9e9; /* Color al pasar el mouse */
}

.task-actions b-button {
    transition: background-color 0.3s ease;
    border-radius: 5px; /* Esquinas redondeadas */
    padding: 10px; /* Espaciado interno */
}

/* Estilos para el botón de completar tarea */
.check-button {
    background-color: white; /* Fondo blanco */
    color: green; /* Color del ícono */
    border: 1px solid #A9DFBF; /* Borde más fino y de color más claro */
}

/* Estilo para el botón de completar al pasar el mouse */
.check-button:hover,
.check-button.active {
    background-color: green; /* Fondo verde al pasar el mouse */
    color: white; /* Cambia el color del ícono a blanco */
}

/* Estilos para el botón de eliminar */
.delete-button {
    background-color: white; /* Fondo blanco */
    color: red; /* Color del ícono */
    border: 1px solid #F5B7B1; /* Borde más fino y de color más claro */
}

/* Estilo para el botón de eliminar al pasar el mouse */
.delete-button:hover {
    background-color: red; /* Fondo rojo */
    color: white; /* Cambia el color del ícono a blanco */
}
</style>
