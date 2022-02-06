import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import Commands from './views/Commands'
import Stats from './views/Stats'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/commands',
    name: 'commands',
    component: Commands
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
