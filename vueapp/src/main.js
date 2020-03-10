import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { createRouter } from './router';
const router = createRouter();

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(VueRouter);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
