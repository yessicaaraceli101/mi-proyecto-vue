import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Importar Bootstrap y Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';  // Bootstrap Icons

// Importar BootstrapVue y los estilos
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Instalar BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');