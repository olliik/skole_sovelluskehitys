<template>
  <div class="login-wrapper">
    <div class="login-form">
      <form>
        <p class="h4 text-center mb-4">Register</p>
        <div class="grey-text">
          <b-form-input
            placeholder="Your username"
            type="text"
            name="username"
            required
            v-model="input.username"
          />
          <b-form-input
            placeholder="Your password"
            type="password"
            name="password"
            required
            v-model="input.password"
          />
          <b-form-input
            placeholder="Confirm your password"
            type="password"
            name="password_confim"
            required
            v-model="input.password_confirm"
          />
        </div>
        <div class="text-center" style="margin-top: 20px">
          <b-button v-on:click="handleClick()">Register</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import { authState } from '../main.js';
import authService from "../helpers/authService";

export default {
  name: "Register",
  data() {
    return {
      input: {
        username: "",
        password: "",
        password_confirm: ""
      }
    };
  },
  methods: {
    async handleClick() {
      const data = {
        username: this.input.username,
        password: this.input.password
      };
      if (this.input.password === this.input.password_confirm) {
        const res = await authService.Login(data);
        console.log("loginview: ", res);
      }
      // ELSE print password and confirm doesnt match
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-wrapper {
  text-align: center;
}
.login-form {
  width: 50vh;
  display: inline-block;
  margin-top: 10vh;
}
</style>
