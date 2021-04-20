

<template>
  <div id="app">
    <MainNav :isLoggedIn="loggedUser.isLoggedIn" @logOut="logOut" />
    <h2 v-if="loggedUser.name">{{ loggedUser.name }}</h2>
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<script>

import MainNav from './components/NavigationComponents/MainNavComponent';
import { EventBus } from './event-bus';

export default {
  components: {
    MainNav,
  },
  data() {
    return {
      loggedUser: {name: '', isLoggedIn: false},
    }
  },
  computed: {
 
  },
  mounted() {
    let user = this.loggedUser
    EventBus.$on('logIn', function (login) {
      user.name = login;
      user.isLoggedIn = true;
      console.log(login);
      return user
    });
    this.loggedUser = user
  },
  methods: {
    logOut() {
      console.log('click catched')
      this.loggedUser.name = ''
      this.loggedUser.isLoggedIn = false
    }
    
  }
  
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'

</style>
