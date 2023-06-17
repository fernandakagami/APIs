import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { ownerRoutes } from './owner'
import { hotelRoutes } from './hotel'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...hotelRoutes,
    ...ownerRoutes,
  ]
})

export default router
