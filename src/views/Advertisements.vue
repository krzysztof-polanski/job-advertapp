<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Job Advertisements App</h1>
    <AdvertApp />
  </div>
</template>

<script>
// @ is an alias to /src
import Advert from '../components/AdvertApp'

export default {
  name: 'Advertisements',
  components: {
    AdvertApp: Advert
  }
}
</script>
