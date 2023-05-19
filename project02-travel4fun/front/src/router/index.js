import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OwnerView from '../views/OwnerView.vue'
import OwnerCreateView from '../views/OwnerCreateView.vue'
import OwnerUpdateView from '../views/Owner/OwnerUpdateView.vue'
import OwnerDashboard from '../views/Owner/OwnerDashboard.vue'
import HotelCreateView from '../views/Owner/HotelCreateView.vue'
import HotelShowView from '../views/Owner/HotelShowView.vue'


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
      path: '/ownerupdate',
      name: 'ownerupdate',      
      component: OwnerUpdateView
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
    },
    {
      path: '/hotel/:id',
      name: 'hotelshow',
      component: HotelShowView,
      props: true
    }
  ]
})

export default router
