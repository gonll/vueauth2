import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Servicios from './views/Servicios.vue'
import Miembros from './views/Miembros.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: Servicios
    },
    {
      path: '/miembros',
      name: 'miembros',
      component: Miembros
    }
  ]
})
