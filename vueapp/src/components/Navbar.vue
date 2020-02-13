<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>myApp</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- Using 'button-content' slot -->
          <template v-if="authenticated">
            <em>{{ user }}</em>
            <b-nav-item-dropdown right>
              <b-dropdown-item>Profile</b-dropdown-item>
              <b-dropdown-item v-on:click="onLogout()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
          <template v-else>
            <b-link :to="'login'"><b-button>Login</b-button></b-link>
            <b-link :to="'register'"><b-button>Register</b-button></b-link>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { authState } from '../main.js';
export default {
  name: "Navbar",
  props: {
    user: String,
    authenticated: Boolean,
  },
  methods: {
    onLogout() {
      authState.logout();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
