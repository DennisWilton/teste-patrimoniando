import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterOptions,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('./views/Login'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./views/Dashboard'),
  },
];

const router: RouterOptions = {
  history: createWebHistory(),
  routes,
};

export default createRouter(router);
