<template>
  <div class="about">
    <keep-alive>
    <h1>This is an about page</h1>
    <h1>Job Advertisements App</h1>
      <AdvertApp />
    </keep-alive>
  </div>
</template>


<script>
import Advert from '../components/AdvertApp'

export default ({
  components: {
    AdvertApp: Advert
  }
})
</script>