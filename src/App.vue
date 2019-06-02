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
        to="/miembros"
        class="mr-2"
      >
        Miembros
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
