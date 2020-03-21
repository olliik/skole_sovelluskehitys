<template>
  <div>
  <b-media>
    <template v-slot:aside>
      <img src="" alt="Media Aside">
    </template>

    <h2>Media Body</h2>
    <p>Some text</p>

    <!-- b-[Optional: add media children here for nesting] -->
  </b-media>
</div>
</template>

<script>
//import { authState } from '../auth.js';
//import reviewService from '../helpers/reviewService.js';

export default {
  name: 'LatestReviewsItem',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
