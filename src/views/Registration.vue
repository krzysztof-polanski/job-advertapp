<template>
  <div class="about">
    <RegAndLog @userLogged="userLogged" />
  </div>
</template>


<script>

import RegAndLog from '../components/RegistrationComponents/RegisterAndLoginComponent'

export default ({
  components: {
    RegAndLog
  },
  methods: {
    userLogged() {
      this.$emit('userLogged')
    }
  }
})
</script>