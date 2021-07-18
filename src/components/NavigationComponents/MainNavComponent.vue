<template>
    <div id="nav" class="nav app__main-nav">
      <router-link to="/">Ogłoszenia</router-link> |
      <router-link v-if="!isLoggedIn" to="/registration">Zarejestruj/Zaloguj się</router-link>
      <router-link v-if="isLoggedIn" @click.native="logOut" to="/">Wyloguj się</router-link>
    </div>
</template>

<script>
export default {
    props: ['isLoggedIn'],
    methods: {
        logOut() {
            console.log('clicked')
            this.$emit('logOut')
        }
    }
}
</script>