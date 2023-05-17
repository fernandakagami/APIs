import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OwnerView from '../views/OwnerView.vue'
import OwnerCreateView from '../views/OwnerCreateView.vue'
import OwnerDashboard from '../views/Owner/OwnerDashboard.vue'
import HotelCreateView from '../views/Owner/HotelCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/owner',
      name: 'owner',      
      component: OwnerView
    },
    {
      path: '/ownercreate',
      name: 'ownercreate',      
      component: OwnerCreateView
    },
    {
      path: '/dashboard',
      name: 'ownerdashboard',      
      component: OwnerDashboard
    },
    {
      path: '/hotelcreate',
      name: 'hotelcreate',      
      component: HotelCreateView
    }
  ]
})

export default router
