<template>
  <div>
  <b-media style="margin:20px;">
    <template v-slot:aside>
      <img :src="data.movie.Poster" alt="Media Aside" style="max-height:200px;">
    </template>

    <div style="text-align: left;">
      <p>{{data.movie.Title}} ({{data.movie.Year}})</p>
      <p>Review: {{data.review}}</p>    
      <p>Rating: {{data.rating}}/10</p>
    </div>

    <!-- b-[Optional: add media children here for nesting] -->
  </b-media>
  <hr />
</div>
</template>

<script>
//import { authState } from '../auth.js';
//import reviewService from '../helpers/reviewService.js';

export default {
  name: 'LatestReviewsItem',
  props: {
    data: Object
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
