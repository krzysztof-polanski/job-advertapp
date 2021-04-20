<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Job Advertisements App</h1>
    <AdvertApp :login="login" />
    <h2>{{ displayLogin }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Advert from '../components/AdvertApp'

export default {
  props: ['login'],
  name: 'Advertisements',
  components: {
    AdvertApp: Advert
  },
  computed: {
    displayLogin() {
      return this.login + ' displayed'
    }
  }
  
}
</script>
