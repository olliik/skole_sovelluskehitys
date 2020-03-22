<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="'/'">leffaApp</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item :to="'/movies'">Movies</b-nav-item>
      </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- Using 'button-content' slot -->
          <template v-if="authenticated">
            <div v-if="avatar">
              <b-img class="navbar-avatar" thumbnail rounded="circle" alt="Circle image" :src="'data:image/jpeg;base64,' + avatar"></b-img>
              <em>{{ user }}</em>
            </div>
            <div v-else>
              <b-img class="navbar-avatar" rounded="circle" alt="Circle image" :src="require(`@/assets/images/avatar.jpg`)"></b-img>
              <em>{{ user }}</em>
            </div>
            <b-nav-item-dropdown right>
              <b-dropdown-item :to="'/' + user + '/profile'">Profile</b-dropdown-item>
              <b-dropdown-item v-on:click="onLogout()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
          <template v-else>
            <b-link :to="'login'"><b-button class="navbar-button">Login</b-button></b-link>
            <b-link :to="'register'"><b-button class="navbar-button">Register</b-button></b-link>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { authState } from '../auth.js';
export default {
  name: "Navbar",
  props: {
    user: String,
    authenticated: Boolean,
    avatar: String,
  },
  methods: {
    onLogout() {
      authState.logout();
      this.$router.push({name: 'home'})
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-avatar {
    width: 38px;
    height: 38px;
    margin: 5px;
  }
  .navbar-button {
    margin-left: 5px;
  }

</style>
