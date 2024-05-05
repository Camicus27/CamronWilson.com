import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/photo-graphics',
      name: 'Photography and Graphic Art',
      component: () => import('../views/PhotoGraphicsView.vue')
    },
    {
      path: '/camicus-games',
      name: 'Camicus Games',
      component: () => import('../views/CamicusGamesView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('../views/ResumeView.vue')
    }
  ]
})

export default router
