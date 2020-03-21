<template>

<b-container class="bv-example-row">
  <b-row>
    <b-col cols="3">
      <LeftNavPanel :items="items"/>
    </b-col>

    <b-col cols="9">
      <router-view></router-view>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import { authState } from "../auth.js";
import LeftNavPanel from '../components/LeftNavigationPanel.vue';

// TODO: URL:n pitäs kans korjata authStaten sijasta props.username
/*
const items = [
        { url: "/" + authState.user + "/profile", text: "Profile" },
        { url: "/" + authState.user + "/watchlist", text: "Watchlist" },
        { url: "/" + authState.user + "/profile/settings", text: "Settings" },
      ]
      */
//if (authState.user == props.username) items.push({ url: "/" + authState.user + "/profile/settings", text: "Settings" })

export default {
  name: "userProfile",
  data() {
    return {
      items: [
        { url: "/" + authState.user + "/profile", text: "Profile" },
        { url: "/" + authState.user + "/profile/watchlist", text: "Watchlist" },
        { url: "/" + authState.user + "/profile/settings", text: "Settings" },
      ]
    }
  },
  components: {
    LeftNavPanel
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
