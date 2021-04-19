

<template>
    <div class="advert nav-elem">
        <h2 @click="show = !show" class="advert">{{ h2Text }} <i class="fas" :class="{ 'fa-plus': !this.show, 'fa-minus': this.show}"></i></h2>
        <transition name=fade>
            <form v-show="show" @submit.prevent="addAdvert">
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
        </transition>
    </div>
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
            },
            show: false,
        }
    },
    computed: {
        h2Text() { return this.show ? `Rezygnuję z dodawania` : `Dodaj Ogłoszenie` }
    },
    methods: {
        addAdvert() {
            this.$emit('newAdvertAdded', this.newAdvert);
            this.toggleShow();
            this.cleanForm()
        },
        cleanForm() {
            this.newAdvert.title = '',
            this.newAdvert.minSalary = 0,
            this.newAdvert.maxSalary = 0,
            this.newAdvert.description = ''
        },
        toggleShow() {
            this.show = false
        }
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    input[type=button], input[type=submit], input[type=reset] {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>