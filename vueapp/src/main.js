import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Home from './views/Home.vue';
import LoginComponent from './views/Login.vue';
import RegisterComponent from "./views/Register.vue";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(VueRouter);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/login", name: "login", component: LoginComponent },
  { path: "/register", name: "register", component: RegisterComponent },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

export const authState = new Vue({
  data() {
    return {
      isAuthenticated: false,
      user: null,
    }
  },
  methods: {
    login(username) {
      this.isAuthenticated = true;
      this.user = username;
    },

    logout() {
      this.isAuthenticated = false;
      this.user = null;
    }
  },

});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
