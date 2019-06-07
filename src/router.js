import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Servicios from './views/Servicios.vue'
import Miembros from './views/Miembros.vue'
import Login from './views/Login.vue'
import Store from './store'
import { userInfo } from 'os';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      component: Miembros,
      meta:{ requiresAuth:true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach( (to, from, next)=>{
  //Antes de ingresar a cada ruta, verifico la ruta TO la que vas a ir... y hago algo
  let routerAuthCheck = true;
  if (routerAuthCheck){
    Store.commit('setUserIsAuthorized', true);
  }

  if (to.matched.some(record => record.meta.requiresAuth)){
    
    //Si requiresAuth es true.. entonces verifico si el usuario YA ESTA LOGUEADO
    if (routerAuthCheck){
      //Usuario SI logueado
      next();
      //Debería avisarle al STORE que el usuario esta logueado
    }else{
      //Usuario no logueado
      router.replace('/login');
    }
  }else{
    //Si requiresAuth es False entonces simplemente ingresa a la ruta
    next();
  }
});
export default router;