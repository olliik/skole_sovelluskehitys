<template>
  <div>
      <h3>Your latest movie reviews</h3> 
    <div v-if="this.reviews.length > 0">
      <div v-for="(item, index) in this.reviews" :key="index">
          <ReviewItem
            :data="item"
           />
      </div>
    </div>

    <div v-else>
      <p>Looks like you don't have any reviews yet.. You can browse our movie section to get started.</p>
    </div>

    </div>
</template>

<script>
import { authState } from '../auth.js';
import reviewService from '../helpers/reviewService.js';

import ReviewItem from './LatestReviewItem.vue';

export default {
  name: 'LatestReviewsContainer',
  data() {
    return {
      isAuth: authState.isAuthenticated,
      id: authState.id,
      reviews: null,
      loading: true,
    }
  },
  async mounted () {
    console.log(this.id)
    let data = await reviewService.getUserReviews(this.id);
    this.reviews = data.data;
    this.loading = false;
    console.log(this.reviews);
  },
  components: {
    ReviewItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
