<template>
  <div>
    <MovieSearchContainer />
    <MovieListContainer />
  </div>
</template>

<script>
import MovieSearchContainer from "../components/MovieSearchContainer.vue";
import MovieListContainer from "../components/MovieListContainer.vue";

export default {
  name: "Movies",
  components: {
    MovieListContainer,
    MovieSearchContainer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
