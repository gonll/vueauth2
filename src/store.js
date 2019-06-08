import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIsAuthorized:false,
  },
  mutations: {
    setUserIsAuthorized(state,replacement){
      state.userIsAuthorized = replacement;
    }
  },
  actions: {
    auth0Login(context){
      console.log('algo');
    }
  }
})
