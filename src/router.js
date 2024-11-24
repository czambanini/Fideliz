import { createRouter, createWebHistory } from 'vue-router';

// Defina as rotas
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('@/views/Edit.vue'),
  },
  {
    path: '/pizzaria-sa',
    name: 'ClientView',
    component: () => import('@/views/ClientView.vue'),
  },
];

// Crie a instância do roteador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;