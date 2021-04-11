<template>
  <div>
    <h1>Job Advertisements App</h1>
    <AdvertApp />
  </div>
</template>

<script>
import Advert from './components/AdvertApp.vue'

export default ({
  components: {
    AdvertApp: Advert
  }
})
</script>
