<template>
    <!-- Contenedor principal del ítem de tarea -->
    <div class="todo-item">
        <!-- Contenedor del título y el estado de la tarea -->
        <div class="todo-header">
            <!-- Muestra el título de la tarea y aplica un estilo tachado si la tarea está completada -->
            <h5 :class="{ completed: completed }">
                {{ title }}
            </h5>

            <!-- Muestra si la tarea está Completada o Pendiente -->
            <span class="status">
                {{ completed ? 'Completada' : 'Pendiente' }}
            </span>
        </div>

        <!-- Contenedor de botones de acción -->
        <div class="todo-actions">
            <!-- Botón para marcar la tarea como completada o pendiente -->
            <button @click="$emit('toggle-completion')">
                Marcar como {{ completed ? 'Pendiente' : 'Completada' }}
            </button>

            <!-- Botón para eliminar la tarea de la lista -->
            <button @click="$emit('delTodo')">
                Eliminar
            </button>
        </div>
    </div>
</template>

<script>
export default {
    // Define el nombre del componente
    name: 'TodoItem',

    // Define las propiedades que este componente recibirá del componente padre
    props: {
        title: String,      // Título de la tarea
        completed: Boolean, // Estado de la tarea (completada o pendiente)
    }
}
</script>

<style scoped>
.todo-item {
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    transition: background-color 0.3s;
}

.todo-item:hover {
    background-color: #f1f1f1; /* Color de fondo al pasar el mouse */
}

.completed {
    text-decoration: line-through;
    color: #888; /* Color del texto de tareas completadas */
}

.todo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.status {
    font-size: 0.9em;
    color: #777; /* Color del texto del estado */
}

.todo-actions {
    margin-top: 10px;
}

.todo-actions button {
    margin-right: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.todo-actions button:hover {
    background-color: #e0e0e0; /* Color de fondo al pasar el mouse */
}
</style>
