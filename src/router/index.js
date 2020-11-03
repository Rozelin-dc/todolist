import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/todo-list",
    name: "TodoList",
    component: () => import("@/views/todo-list/index.vue")
  },
  {
    path: "/counter",
    name: "Counter",
    component: () => import("@/views/counter/index.vue")
  },
  {
    path: "item-list",
    name: "ItemList",
    component: () => import("@/views/item-list/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
