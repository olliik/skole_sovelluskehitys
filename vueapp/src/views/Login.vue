<template>
  <div class="login-wrapper">
    <div class="login-form">
      <form>
        <p class="h4 text-center mb-4">Sign in</p>
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
        </div>
        <div class="text-center" style="margin-top: 20px">
          <b-button v-on:click="handleClick()">Login</b-button>
        </div>
      </form>
    </div>
    <div class="login-alert">Tarkista kayttajatunnus tai salasana!</div>
  </div>
</template>

<script>
import { authState } from '../auth.js';
import authService from "../helpers/authService";

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async handleClick() {
      const data = {
        username: this.input.username,
        password: this.input.password
      };
      const res = await authService.Login(data);
      console.log("loginview res: ", res);
      if (res.status === 200) {
        console.log(':)')
        authState.login(res.data)
        this.$router.push({name: 'home'})
      }
      // TODO: else notify user about failed login
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
.login-alert {
  visibility: hidden;
}
</style>
