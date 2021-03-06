import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import Movies from './views/Movies.vue';
import LoginComponent from './views/Login.vue';
import RegisterComponent from "./views/Register.vue";
import registerSuccesfulComponents from "./views/RegisterSuccesful.vue";
import UserProfileComponent from './views/UserProfile.vue';
import UserProfileHome from './components/ProfileHome.vue';
import ProfileSettings from './components/ProfileSettings.vue';
import ProfileReviews from './components/ProfileReviews.vue';


Vue.use(VueRouter);

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/movies", name: "movies", component: Movies },
    { path: "/login", name: "login", component: LoginComponent },
    { path: "/register", name: "register", component: RegisterComponent },
    { path: "/welcome", name: "registerSuccesful", component: registerSuccesfulComponents },
    { path: "/:username/profile/", name: "userProfile", component: UserProfileComponent,
      children: [
        { path: "", name: "userHome", component: UserProfileHome },
        { path: "reviews", name: "userReviews", component: ProfileReviews },
        { path: "settings", name: "userSettings", component: ProfileSettings },
      ]
    }
  ];
  

export function createRouter () {
    return new VueRouter({
        routes: routes,
        mode: 'history'
      });
}