<template>
  <div class="login-wrapper">
    <div class="login-form">
      <form>
        <p class="h4 text-center mb-4">Register</p>
        <div class="grey-text">
          <!-- This is a form text block (formerly known as help block) -->
          <b-form-text id="input-name-help">Your full name.</b-form-text>
          <b-form-input
            id="input-name"
            name="username"
            v-model="input.username"
            :state="nameState"
            aria-describedby="input-name-help input-name-feedback"
            placeholder="Enter your name"
            trim
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-name-feedback">Enter at least 4 letters</b-form-invalid-feedback>

          <!-- This is a form text block (formerly known as help block) -->
          <b-form-text id="input-password-help">Your password.</b-form-text>
          <b-form-input
            id="input-password"
            name="password"
            type="password"
            v-model="input.password"
            :state="passwordState"
            aria-describedby="input-password-help input-password-feedback"
            placeholder="Enter your password"
            trim
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-password-feedback">Enter at least 4 letters</b-form-invalid-feedback>

          <!-- This is a form text block (formerly known as help block) -->
          <b-form-text id="input-password-help">Re-entered password.</b-form-text>
          <b-form-input
            id="input-password_confirm"
            name="password_confirm"
            type="password"
            v-model="input.password_confirm"
            :state="password_confirmState"
            aria-describedby="input-password_confirm-help input-password_confirm-feedback"
            placeholder="Re-enter your password"
            trim
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-password-feedback">The passwords have to match.</b-form-invalid-feedback>
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
  computed: {
    nameState() {
      return this.input.username.length > 3 ? true : false;
    },
    passwordState() {
      return this.input.password.length > 3 ? true : false;
    },
    password_confirmState() {
      return this.input.password_confirm == this.input.password &&
        this.passwordState
        ? true
        : false;
    }
  },
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
      if (this.nameState && this.passwordState && this.password_confirmState) {
        const res = await authService.Register(data);
        console.log("loginview: ", res);
        if (res.status === 200) {
          this.$router.push({name: 'registerSuccesful'})
        }
      }
    }
  }
};
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
