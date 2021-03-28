import { createRouter, createWebHistory } from "vue-router";
// import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }, {
    path: "/index",
    name: "Index",
    component: () => import("../views/Index"),
    props: true,
    children: [{
      path: "/idcard",
      name: "IdCard",
      component: () => import("../views/business/IdCard"),
      props: true
    }, {
      path: "/order",
      name: "Order",
      component: () => import("../views/business/Order"),
      props: true
    }]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
