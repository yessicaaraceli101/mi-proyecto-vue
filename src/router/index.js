import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue'; // Importa el componente de Lista de Tareas
import CombinedView from '@/views/CombinedView.vue'; // Importa el componente de Vista Combinada

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addtask',
    name: 'AddTask', // Ruta para añadir tareas
    component: AddTask // Componente para añadir tareas
  },
  {
    path: '/tasklist',
    name: 'TaskList', // Ruta para la lista de tareas
    component: TaskList // Componente que muestra la lista de tareas
  },
  {
    path: '/combined',
    name: 'CombinedView', // Ruta para la vista combinada
    component: CombinedView // Componente que combina añadir y mostrar tareas
  },
  // Aquí puedes agregar más rutas si es necesario
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;