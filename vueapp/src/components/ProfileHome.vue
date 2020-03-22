<template>
  <div style="text-align: left; margin: 20px;">
    <b-img v-if="avatar"
          class="profile-image"
          v-bind="avatar"
          rounded="circle"
          alt="Circle image"
          :src="'data:image/jpeg;base64,' + avatar"
        ></b-img>
        <b-img v-else
          class="profile-image"
          v-bind="avatar"
          rounded="circle"
          alt="Circle image"
          :src="require(`@/assets/images/avatar.jpg`)"
        ></b-img>
    <p>{{this.username}}</p>
    <hr />
    Profile description:
    <p>{{this.profileDescription}}</p>
  </div>
</template>

<script>
import { authState } from "../auth.js";
import authService from "../helpers/authService.js";

export default {
  name: "ProfileHome",
  data() {
    return {
      avatar: null,
      username: null,
      profileDescription: null
    }
  },
  created() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const res = await authService.getUser(authState.id);
      this.avatar = res.data.avatar;
      this.username = res.data.username;
      this.profileDescription = res.data.profileDescription || "";
      console.log("profile: " + res);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-image {
  max-height: 200px;
}
</style>
