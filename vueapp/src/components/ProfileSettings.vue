<template>
  <div id="settings-container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    
      <b-form-group id="input-group-username" label="Username:" label-for="input-username">
        <b-form-input id="input-username" v-model="form.username" required disabled></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-description"
        label="Profile description:"
        label-for="input-description"
      >
        <b-form-input id="input-description" v-model="form.profileDescription" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-avatar" label="Avatar:" label-for="input-avatar">
        
        <b-form-file
          v-model="form.file"
          :state="Boolean(form.file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <b-img
          v-bind="avatar"
          rounded="circle"
          alt="Circle image"
          :src="'data:image/jpeg;base64,' + avatar"
        ></b-img>
      </b-form-group>

      <b-button type="submit" pill variant="primary" class="form-button">Save</b-button>
      <b-button type="reset" pill variant="danger" class="form-button">Reset (ei vielä toimintoa)</b-button>
    </b-form>
  </div>
</template>

<script>
import { authState } from "../auth.js";
import authService from "../helpers/authService.js";

export default {
  name: "ProfileSettings",
  data() {
    return {
      form: {
        file: null,
        username: null,
        profileDescription: null
      },
      show: true,
      avatar: null
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      let formData = new FormData();
      formData.append("profileDescription", this.form.profileDescription);
      formData.append("avatar", this.form.file);
      let res = await authService.updateUserData(authState.id, formData);
      console.log(res);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.profileDescription = "";
      this.form.username = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    async getUserData() {
      const res = await authService.getUser(authState.id);
      this.avatar = res.data.avatar;
      this.form.username = res.data.username;
      this.form.profileDescription = res.data.profileDescription || "";
      console.log("profile: " + res);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#settings-container {
  text-align: left;
  padding: 25px;
}
.form-group {
    margin: 30px;
}
img {
    margin-top: 25px;
}
.form-button {
  margin: 8px;
  width: 180px;
}
</style>
