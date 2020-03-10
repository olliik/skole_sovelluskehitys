<template>
  <div>
    <b-nav vertical class="w-25">
      
      <div class="navItem" v-for="(item, index) in items" :key="index" >
        <b-nav-item :to="item.url" exact exact-active-class="active">{{item.text}}</b-nav-item>
      </div>
      
    </b-nav>
  </div>
</template>

<script>

export default {
  name: "LeftNavigationPanel",
  props: {
    items: {
      type: Array,
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navItem {
  background-color: #303030;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 2px;
    line-height: 8px;
    display: inline-block;
    border-radius: 50px;
    padding: 9px 15px;
    border: 0;
    text-transform: uppercase;
    margin: 10px 20px 5px 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
