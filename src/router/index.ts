import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import login from "../views/login/login.vue";

import localCache from '@/utils/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: '/main'
  },
  {
    path: "/login",
    name: "Login",
    component: login,
  },
  {
    path: "/main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/main/main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  if(to.path !== '/login') {
    const token = localCache.getCache('token');
    if(!token) {
      return '/login'
    }
  }
})

export default router;
