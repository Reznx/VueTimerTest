import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/east",
    name: "east",
    meta: { layout: "main" },
    component: () => import("@/components/EastTimer.vue")
  },
  {
    path: "/west",
    name: "west",
    meta: { layout: "main" },
    component: () => import("@/components/WestTimer.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
