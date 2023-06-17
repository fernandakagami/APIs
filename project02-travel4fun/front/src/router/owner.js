import OwnerView from '../views/OwnerView.vue'
import OwnerCreateView from '../views/Owner/OwnerCreateView.vue'
import OwnerUpdateView from '../views/Owner/OwnerUpdateView.vue'
import OwnerPasswordView from '../views/Owner/OwnerPasswordView.vue'
import OwnerDashboardView from '../views/Owner/OwnerDashboardView.vue'

export const ownerRoutes = [
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
]