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
    path: '/registro',
    name: 'registro',    
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/giro',
    name: 'giro',    
    component: () => import('../views/Home.vue')
  },
  {
    path: '/telefono',
    name: 'telefono',    
    component: () => import('../views/Home.vue')
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
  },
  {
    path: '/comparte',
    name: 'comparte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Comparte.vue')
  },
  {
    path: '/beneficiarios',
    name: 'beneficiarios',
    component: () => import('../views/Beneficiarios.vue')
  },
  {
    path: '/admin-recarga',
    name: 'admin-recarga',
    component: () => import('../views/Admin-recarga.vue')
  },
  {
    path: '/admin-giro',
    name: 'admin-giro',
    component: () => import('../views/Admin-giro.vue')
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
