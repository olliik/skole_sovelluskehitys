<template>
  <div v-if="loading">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
  </div>
  <div v-else>
      <div v-for="(item, index) in this.movies.data" :key="index">
          <MovieItem
            :data="item"
           />
      </div>
  </div>
</template>

<script>
import movieService from '../helpers/movieService.js';
import MovieItem from './MovieListItem.vue';

export default {
  name: 'MovieListContainer',
  data () {
    return {
      movies: null,
      loading: true,
    }
  },
  async mounted () {
      console.log("movieservice get: ");
      this.movies = await movieService.getALl();
      this.loading = false;
      console.log(this.movies)
  },
  components: {
      MovieItem,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
