
<template>
  <div style="margin-top: 10px;">
    <b-jumbotron lead="Start adding movies to your watchlist!">
      <p>You can search the OMDb API for a specific movie our browse our suggestions below.</p>

      <!-- Search result -->
      <div v-if="searchResult">

        <b-icon v-b-toggle.collapse-1 icon="arrow-up-down" style="width: 30px; height: 30px; float: right;"></b-icon>
        <b-collapse visible id="collapse-1">
          <template>
            <MovieItem :data="this.searchResult.data"/>
          </template>
        </b-collapse>
      </div>
      <!-- END search result -->

      <div style="margin-top: 50px;">
        <b-form inline style="justify-content: center; margin: 10px">
          <label class="sr-only" for="inline-form-input-title">Title</label>
          <b-input-group prepend="Title" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input v-model="inputTitle" id="inline-form-input-title" placeholder="Title"></b-input>
          </b-input-group>

          <label class="sr-only" for="inline-form-input-username">Year</label>
          <b-input-group prepend="Year" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input v-model="inputYear" id="inline-form-input-year" placeholder="Year"></b-input>
          </b-input-group>          
        </b-form>
      </div>
      <b-button variant="primary" @click="handleClick">Search</b-button>
    </b-jumbotron>

    
  </div>
</template>

<script>
import omdbApiService from '../helpers/omdbApiService.js';
import MovieItem from './MovieListItem.vue';

export default {
  name: "MovieSearchContainer",
  data () {
    return {
      inputTitle: null,
      inputYear: null,
      searchResult: null,
      loading: true,
    }
  },
  components: {
    MovieItem
  },
  methods: {
    async handleClick() {
      console.log('parametri: ' + this.inputTitle)
      this.searchResult = await omdbApiService.Query(this.inputTitle, this.inputYear);
      console.log('updated var: ', this.searchResult);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
