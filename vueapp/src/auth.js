import Vue from 'vue';

export const authState = new Vue({
    data() {
      return {
        isAuthenticated: false,
        id: null,
        user: null,
      }
    },
    methods: {
      login(data) {
        this.isAuthenticated = true;
        this.id = data._id;
        this.user = data.username;
      },
  
      logout() {
        this.isAuthenticated = false;
        this.id = null;
        this.user = null;
      }
    },
  
  });