import Vue from "vue";
import VueRouter from "vue-router";

import Event from "../views/Event.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/event",
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
