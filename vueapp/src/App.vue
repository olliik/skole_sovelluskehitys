<template>
  <div id="app" class="container">
    <Navbar :user="username" :authenticated="authenticated" />
    <router-view></router-view>
  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Navbar from './components/Navbar.vue';
import { authState } from './auth.js';

export default {
  name: "App",
  computed: {
    authenticated() {
      return authState.isAuthenticated;
    },
    username() {
      return authState.user;
    }
  },
  components: {
    Navbar,
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #00bc8c
}
</style>
