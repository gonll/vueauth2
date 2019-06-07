<template>
    <div class="login">
        <v-btn @click="auth0Login()">Login</v-btn>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods:{
        auth0Login(){
            this.$store.dispatch('auth0Login');
        }
    }
}
</script>

<style>

</style>
