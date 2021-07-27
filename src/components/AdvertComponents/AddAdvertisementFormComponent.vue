

<template>
    <div class="advert nav-elem">
        <h2 @click="show = !show" class="advert">{{ h2Text }} <i class="fas" :class="{ 'fa-plus': !this.show, 'fa-minus': this.show }"></i></h2>
        <transition name=fade>
            <form class="form form--advert" v-show="show" @submit.prevent="addAdvert">
              <label class="form__label" for="new-advert-title">Tytuł: </label>
              <input class="form__input" type="text" placeholder="advertisement" v-model="newAdvert.title" id="new-advert-title" required><br>
              <label class="form__label" for="new-advert-min-salary">Minimalna stawka: </label>
              <input class="form__input" type="number" v-model="newAdvert.minSalary" min="0" id="new-advert-min-salary" required><br>
              <label class="form__label" for="new-advert-max-salary">Maksymalna stawka: </label>
              <input class="form__input" type="number" v-model="newAdvert.maxSalary" min="0" id="new-advert-max-salary" required><br>
              <label class="form__label" for="new-advert-description">Opis zadania: </label>
              <textarea class="form__textarea" placeholder="Description" v-model="newAdvert.description" rows="4" cols="50" id="new-advert-description"></textarea><br>
              <label for="new-advert-company-logo">Logo firmy:</label>
              <input type="text" name="company_logo" id="new-advert-company-logo" placeholder="adres url logo firmy" v-model="newAdvert.logo"><br>
              <button class="btn btn--submit form__button">add advertisement</button>
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
                description: '',
                logo: 'https://www.uidownload.com/files/239/730/324/technology-company-logo-template.jpg'
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
            this.newAdvert.description = '',
            this.newAdvert.logo = ''
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
    /* input[type=button], input[type=submit], input[type=reset] {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    } */
    /* @import '../../assets/styles/style.css'; */
</style>