import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/About.vue'),
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: () => import('@/views/TodoList.vue'),
  },
  {
    path: '/counter',
    name: 'Counetr',
    component: () => import('@/views/Counter.vue'),
  },
  {
    path: '/save-links',
    name: 'SaveLinks',
    component: () => import('@/views/SaveLinks.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
