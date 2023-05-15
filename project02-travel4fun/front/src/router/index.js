import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OwnerView from '../views/OwnerView.vue'
import OwnerCreateView from '../views/OwnerCreateView.vue'

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
    }
  ]
})

export default router
