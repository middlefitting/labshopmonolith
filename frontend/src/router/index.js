import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../components/pages/Index.vue'),
    },
    {
      path: '/monoliths/orders',
      component: () => import('../components/ui/OrderGrid.vue'),
    },
  ],
})

export default router;
