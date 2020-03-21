<template>
  <div>
    <p>MIKSI VITUSSA TÄMÄ ELEMENTTI EI TOIMI?!</p>

    
    <LatestReviewsContainer />
    
  </div>
</template>

<script>
// components
import LatestReviewsContainer from "./LatestReviewsContainer.vue";

export default {
  name: "ProfileHome",
  components: {
    LatestReviewsContainer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
