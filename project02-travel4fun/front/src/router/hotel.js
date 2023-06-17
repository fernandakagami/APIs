import HotelDashboardView from '../views/Hotel/HotelDashboardView.vue'
import HotelCreateView from '../views/Hotel/HotelCreateView.vue'
import HotelUpdateView from '../views/Hotel/HotelUpdateView.vue'
import RoomCreateView from '../views/Room/RoomCreateView.vue'

export const hotelRoutes = [
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
  },
  {
    path: '/hotel/:id/roomcreate',
    name: 'roomcreate',      
    component: RoomCreateView,
    props: true
  },
]