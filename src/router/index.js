import Vue from 'vue'
import VueRouter from 'vue-router'
import DeliveryHomepage from '../views/DeliveryHomepage.vue'
//需呼叫views 要再這邊註冊step.1
import Infopage from '../views/Infopage.vue'
import Home from '../views/Home.vue'
import StayHomepage from '../views/StayHomepage.vue'
import GameRule from '../views/GameRule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/StayHomepage',
    name: 'StayHomepage',
    component: StayHomepage
  },
  {
    path: '/DeliveryHomepage',
    name: 'DeliveryHomepage',
    component: DeliveryHomepage
  },
  {
    path: '/GameRule',
    name: 'GameRule',
    component: GameRule
  },
  //需註冊Views網頁 step.2
  {
    path: '/Infopage',
    name: 'Infopage',
    component: Infopage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
