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
    name: "login",
    component: login,
  },
  {
    path: "/main",
    name: "main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/main/main.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import('@/views/not-found/not-found.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


//导航守卫
router.beforeEach((to) => {
  if(to.path !== '/login') {
    const token = localCache.getCache('token');
    if(!token) {
      return '/login'
    }
  }
})

export default router;
