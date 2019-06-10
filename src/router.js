import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Servicios from './views/Servicios.vue'
import Miembros from './views/Miembros.vue'
import Login from './views/Login.vue'
import Auth0CallBack from './views/Auth0callback.vue'
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
      path: '/auth0callback',
      name: 'auth0callback',
      component: Auth0CallBack
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
  let routerAuthCheck = false;

  //Si voy a auth0callback actualizo entonces los token
  if(to.matched.some(record=>record.path == '/auth0callback')){
    Store.dispatch('auth0HandleAuthentication');
    next(false); 
  }

  //Antes de ingresar a cada ruta, verifico que este logueado el chango.. al principio siempre supongo que NO

  if ( localStorage.getItem('access_token') && localStorage.getItem('id_token') && localStorage.getItem('expires_at') && localStorage.getItem('expires_at') !== 'undefined' ){
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    routerAuthCheck = new Date().getTime() < expiresAt;
  }

  //Si el chango si estaba logueado, entonces actualizo la variable que me decía que no lo estaba
  Store.commit('setUserIsAuthorized', routerAuthCheck);
 

  if (to.matched.some(record => record.meta.requiresAuth)){
    
    //Si requiresAuth es true.. entonces verifico si el usuario YA ESTA LOGUEADO
    if (routerAuthCheck){
      next();
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