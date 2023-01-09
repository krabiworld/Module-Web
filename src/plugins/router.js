import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Commands from '../views/Commands.vue'
import Stats from '../views/Stats.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/commands',
    component: Commands
  },
  {
    path: '/stats',
    component: Stats
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
