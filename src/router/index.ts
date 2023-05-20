import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/dashboard-page-2',
      name: 'dashboard-page-2',
      component: () => import('../views/Dashboard2.vue')
    },
    {
      path: '/dashboard-page-3',
      name: 'dashboard-page-3',
      component: () => import('../views/Dashboard3.vue')
    }
  ]
})

export default router
