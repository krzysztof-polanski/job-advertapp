

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

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #231F20;
  width: 60%;
  margin: 0 auto;
}

#nav, .nav-container {
  padding: 30px;
  border-bottom: 1px solid #8E793E;
  text-transform: uppercase;
  text-decoration: none;
  font-family: fantasy;
  letter-spacing: 3px;
  font-size: 2.5vh;
}

#nav a, .nav-elem {
  font-weight: bold;
  color: #231F20;
}

#nav a.router-link-exact-active {
  color: #8E793E;
} */

.dark-gold {
  color: #8E793E
}
.light-gold {
  color: #AD974F
}
.intellectual-grey {
  color: #231F20
}
.light-grey {
  color: #EAEAEA
}
@import './assets/styles/style.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'

</style>
