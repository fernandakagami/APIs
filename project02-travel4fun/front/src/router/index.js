import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OwnerView from '../views/OwnerView.vue'
import OwnerCreateView from '../views/Owner/OwnerCreateView.vue'
import OwnerManagement from '../views/OwnerManagement.vue'
import OwnerDashboardView from '../views/Owner/OwnerDashboardView.vue'
import OwnerUpdateView from '../views/Owner/OwnerUpdateView.vue'
import OwnerPasswordView from '../views/Owner/OwnerPasswordView.vue'
import HotelDashboardView from '../views/Owner/Hotel/HotelDashboardView.vue'
import HotelCreateView from '../views/Owner/Hotel/HotelCreateView.vue'
import HotelUpdateView from '../views/Owner/Hotel/HotelUpdateView.vue'
import RoomCreateView from '../views/Owner/Room/RoomCreateView.vue'

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
      path: '/ownermanagement',
      component: OwnerManagement,
      children: [
        {
          path: '/dashboard',
          name: 'ownerdashboard',      
          component: OwnerDashboardView
        },
        {
          path: '/hotel/:id',
          name: 'hoteldashboard',      
          component: HotelDashboardView,
          props: true
        },
        {
          path: '/ownerupdate',
          name: 'ownerupdate',      
          component: OwnerUpdateView
        },
        {
          path: '/hotelcreate',
          name: 'hotelcreate',      
          component: HotelCreateView
        },
        {
          path: '/ownerpassword',
          name: 'ownerpassword',      
          component: OwnerPasswordView
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
        },
        {
          path: '/hotel/:id/roomcreate',
          name: 'roomcreate',      
          component: RoomCreateView,
          props: true
        },
      ]
    },
  ]
})

export default router
