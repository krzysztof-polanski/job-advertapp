<template>
    <form @submit.prevent="addAdvert" class="advert nav-elem">
      <h2>Dodaj nowe Ogłoszenie:</h2>
      <input type="text" placeholder="advertisement" v-model="newAdvert.title" required>
      <input type="number" v-model="newAdvert.minSalary" min="0" required>
      <input type="number" v-model="newAdvert.maxSalary" min="0" required>
      <textarea placeholder="Description" v-model="newAdvert.description" rows="4" cols="50"></textarea>
      <button class="advert">add advertisement</button>
    </form>
</template>


<script>
export default {
    data() {
        return {
            newAdvert: {
                title: '',
                minSalary: 2000,
                maxSalary: 10000,
                description: ''
            }
        }
    },
    methods: {
        addAdvert() {
            this.$emit('newAdvertAdded', this.newAdvert);
            this.cleanForm()
        },
        cleanForm() {
            this.newAdvert.title = '',
            this.newAdvert.minSalary = 0,
            this.newAdvert.maxSalary = 0,
            this.newAdvert.description = ''
        }
    }
}
</script>