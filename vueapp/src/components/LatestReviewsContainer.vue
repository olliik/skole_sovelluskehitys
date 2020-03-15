<template>
  <div>
      <h3>Your latest movie reviews</h3> 
    <div v-if="isAuth">
      <p>List latest reviews here...</p>
    </div>

    <div v-else>
      <p>Looks like you don't have any reviews yet.. Click <a href="#">here</a> to get started.</p>
    </div>

    </div>
</template>

<script>
import { authState } from '../auth.js';
export default {
  name: 'LatestReviewsContainer',
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

</style>
