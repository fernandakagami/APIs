import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OwnerView from '../views/OwnerView.vue'
import OwnerCreateView from '../views/OwnerCreateView.vue'
import OwnerUpdateView from '../views/Owner/OwnerUpdateView.vue'
import OwnerPasswordView from '../views/Owner/OwnerPasswordView.vue'
import OwnerDashboardView from '../views/Owner/OwnerDashboardView.vue'
import HotelDashboardView from '../views/Hotel/HotelDashboardView.vue'
import HotelCreateView from '../views/Hotel/HotelCreateView.vue'
import HotelUpdateView from '../views/Hotel/HotelUpdateView.vue'



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
      path: '/ownerpassword',
      name: 'ownerpassword',      
      component: OwnerPasswordView
    },
    {
      path: '/dashboard',
      name: 'ownerdashboard',      
      component: OwnerDashboardView
    },
    {
      path: '/hotelcreate',
      name: 'hotelcreate',      
      component: HotelCreateView
    },
    {
      path: '/hotel/:id',
      name: 'hoteldashboard',
      component: HotelDashboardView,
      props: true
    },
    {
      path: '/hotel/profile/:id',
      name: 'hotelupdate',
      component: HotelUpdateView,
      props: true
    }
  ]
})

export default router
