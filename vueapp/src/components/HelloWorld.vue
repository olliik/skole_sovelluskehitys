<template>
  <div class="hello">

    <div v-if="isAuth">
      <h1>Welcome, {{this.username}}</h1>
    </div>

    <div v-else>
      <h1>Welcome!</h1>
      <h4>Start reviewing movies and sharing your watchlist by singing up or logging in.</h4>
    </div>

    </div>
</template>

<script>
import { authState } from '../auth.js';
export default {
  name: 'HelloWorld',
  data() {
    return {
      isAuth: authState.isAuthenticated,
      username: authState.user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
