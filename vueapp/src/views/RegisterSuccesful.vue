<template>
  <div style="margin: 40px">
  <b-jumbotron header="Registered succesfully!" lead="Welcome to leffaApp!">
    <p>You can start by logging in to your account or visit our home page.</p>
    <b-button variant="primary" href="/Login">Login</b-button>
    <b-button variant="secondary" href="/">Home</b-button>
  </b-jumbotron>
</div>
</template>

<script>

export default {
  name: "registerSuccesful",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
