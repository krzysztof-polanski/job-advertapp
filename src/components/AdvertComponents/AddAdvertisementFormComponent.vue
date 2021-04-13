<template>
    <form @submit.prevent="addAdvert" class="advert nav-elem">
      <h2>Dodaj nowe Ogłoszenie:</h2>
      <label for="">Tytuł: </label>
      <input type="text" placeholder="advertisement" v-model="newAdvert.title" required><br>
      <label for="">Minimalna stawka: </label>
      <input type="number" v-model="newAdvert.minSalary" min="0" required><br>
      <label for="">Maksymalna stawka: </label>
      <input type="number" v-model="newAdvert.maxSalary" min="0" required><br>
      <label for="">Opis zadania: </label>
      <textarea placeholder="Description" v-model="newAdvert.description" rows="4" cols="50"></textarea><br>
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