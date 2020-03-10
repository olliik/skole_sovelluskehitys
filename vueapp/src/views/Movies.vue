<template>
  <div>
    <MovieListContainer />
  </div>
</template>

<script>
import MovieListContainer from "../components/MovieListContainer.vue";

export default {
  name: "Movies",
  components: {
    MovieListContainer,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
