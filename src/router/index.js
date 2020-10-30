import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Repository from "../views/Repository.vue";
import About from "../views/About.vue"
import Profile from "../views/Profile.vue"
import NotFoundPage from '../components/NotFoundPage.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/repository",
    name: "Repository",
    component: Repository
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
  path: '*',
  component: NotFoundPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
