import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('../pages/Login.vue'),
    },
    {
      path: '/chat',
      name: '聊天',
      component: () => import('../pages/Chat.vue'),
    }
  ]
});
export default router;
