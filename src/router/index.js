import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/caracteristicas',
    name: 'caracteristicas',
    
    component: () => import('../views/Caracteristicas.vue')
  },
  {
    path: '/invita',
    name: 'invita',
    
    component: () => import('../views/Invita.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/preguntas',
    name: 'preguntas',
    
    component: () => import('../views/Preguntas.vue')
  },

  {
    path: '/recarga',
    name: 'recarga',
    
    component: () => import('../views/Recarga.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    
    component: () => import('../views/Dashboard.vue')
  },

  {
    path: '/controlpanel',
    name: 'controlpanel',
    
    component: () => import('../views/Panel-control.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
