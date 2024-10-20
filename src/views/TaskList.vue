<template>
    <div class="container d-flex flex-column align-items-center mt-4">
        <h1 class="text-celeste">Lista de Tareas</h1>
        <div class="d-flex align-items-center mb-3">
            <!-- Botón para cargar tareas desde la API -->
            <button class="btn btn-primary" @click="fetchTasks">
                <i class="bi bi-arrow-repeat me-2"></i> Cargar Tareas
            </button>
        </div>
        
        <!-- Mostrar las tareas si existen -->
        <div v-if="tasks.length > 0" class="task-list d-flex flex-column align-items-center">
            <div v-for="task in tasks" :key="task.id" class="task-item d-flex justify-content-between align-items-center text-center p-3 mb-4 border rounded">
                <div class="text-center flex-grow-1">
                    <!-- Muestra el título de la tarea, tachado si está completada -->
                    <h5 :class="{ completed: task.completed }" class="mb-0 fw-bold">
                        {{ task.todo }}
                    </h5>
                    <!-- Muestra el estado de la tarea -->
                    <span class="badge fw-bold" :class="task.completed ? 'bg-success' : 'bg-warning'">
                        {{ task.completed ? 'Completada' : 'Pendiente' }}
                    </span>
                </div>
                <div class="task-actions d-flex align-items-center justify-content-center">
                    <!-- Botón para marcar/desmarcar la tarea (icono) -->
                    <button @click="toggleTaskCompletion(task)" 
                            :class="['btn', task.completed ? 'btn-success' : 'btn-outline-success', 'me-2', 'fw-bold']">
                        <i class="bi bi-check-lg"></i>
                    </button>
                    <!-- Botón para eliminar la tarea (icono) -->
                    <button @click="deleteTask(task)" class="btn btn-outline-danger fw-bold">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [], // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
        // Llamada para obtener las tareas desde la API externa
        async fetchTasks() {
            try {
                const response = await fetch('https://dummyjson.com/todos');
                const data = await response.json();
                this.tasks = data.todos; // Asignar las tareas obtenidas desde la API
            } catch (error) {
                console.error("Error al cargar las tareas:", error);
            }
        },

        // Cambiar el estado de una tarea (completada/no completada)
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        // Eliminar la tarea seleccionada
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
/* Estilos adicionales personalizados */

/* Cambiar el color del título a celeste y agregar un sombreado */
.text-celeste {
    color: #00BFFF; /* Color celeste */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Sombreado */
}

/* Configurar el contenedor del flexbox con un ancho fijo de 800px y centrado */
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
    text-align: center;
    padding: 15px;
    margin-bottom: 30px; /* Aumentando el margen inferior para más separación */
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
    min-height: 100px; /* Asegura que todos los task-items tengan al menos esta altura */
}

.completed {
    text-decoration: line-through;
    color: gray;
}

.task-actions {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Asegura que el contenido dentro del flexbox esté centrado y estirado */
.task-item > .text-center {
    flex-grow: 1; /* Hace que el contenido del texto se expanda uniformemente */
}

.task-item > .task-actions {
    flex-shrink: 0; /* Evita que los botones se reduzcan en tamaño */
}

/* Negrita para el texto de los botones */
.task-actions button {
    font-weight: bold;
}

/* Cambiar el color de los botones al pasar el mouse */
.btn-outline-success:hover,
.btn-success {
    background-color: #28a745;
    color: white;
}

.btn-outline-danger:hover,
.btn-danger {
    background-color: #dc3545;
    color: white;
}
</style>