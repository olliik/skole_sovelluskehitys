<template>
  <div>
    <div class="container">
      <img class="banner-image" alt="Banner image" :src="require(`@/assets/images/${imgIndex}.jpg`)" />
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      imgIndex: Math.floor(Math.random() * 4) + 1,
    };
  },
  components: {
    HelloWorld,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
}
</style>
