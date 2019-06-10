<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Apuest</span>
        <span class="font-weight-light">APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        to="/"
        class="mr-2"
      >
        Home
      </v-btn>
      <v-btn
        to="/about"
        class="mr-2"
      >
        About
      </v-btn>
      <v-btn
        to="/servicios"
        class="mr-2"
      >
        Servicios
      </v-btn>
      <v-btn
        to="/login"
        class="mr-2"
        v-if="!this.$store.state.userIsAuthorized"
      >
        Iniciar Sesión
      </v-btn>
      <v-btn
        @click="logOut"
        v-if="this.$store.state.userIsAuthorized"
      >
        Logout
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data () {
    return {
      clientId: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID
    }
  },
  methods:{
    logOut(){
      console.log('Chau');
      this.$store.dispatch('auth0Logout');
    }
  }
}
</script>
