import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Privacy from "../views/Privacy.vue";
Vue.use(VueRouter);

const routes = [
     {
          path: "/",
          name: "Home",
          component: Home,
     },
     {
          path: "/privacy",
          name: "Privacy",
          component: Privacy,
     },
];

const router = new VueRouter({
     mode: "history",
     base: process.env.BASE_URL,
     routes,
     scrollBehavior(to, from, savedPosition) {
          if (savedPosition) {
               return savedPosition;
          } else {
               return { x: 0, y: 0 };
          }
     },
});

export default router;
