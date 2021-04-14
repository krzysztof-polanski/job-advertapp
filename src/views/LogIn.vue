<template>
  <div class="home">
    <div id="nav">
      <router-link to="/about">Użytkownicy</router-link> |
      <router-link to="/about/login">Zaloguj się</router-link>
    </div>
    <keep-alive><router-view/></keep-alive>
    <h1>Log in</h1>
      <LogInComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import LogIn from '../components/RegistrationComponents/LogInComponent.vue'

export default {
  name: 'MainComponent',
  components: {
    LogInComponent: LogIn
  }
}
</script>