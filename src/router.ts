import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterOptions,
} from 'vue-router';
import AuthManager from './app/AuthManager/AuthManager';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('./views/Login'),
    meta: {},
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./views/Dashboard'),
    meta: {
      requiresAuth: false,
    },
  },
];

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes,
};

const router = createRouter(routerOptions);

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (AuthManager.isLogged) {
      next();
    }
    next({ name: 'Login' });
  }
  next();
});

export default router;
