<template>

    <div>
        <NavElement class="nav-elem" v-for="nav in navs" :key="nav.id" :nav="nav" @isMainPage='isItMainPage' />
        <PageTitle v-if="!MainPage" :CurrentPage="CurrentPage" />
    </div>

</template>

<script>

import NavElement from './NavElementComponent.vue'
import PageTitle from './PageTitleComponent.vue'

export default {
    components: {
        NavElement,
        PageTitle
    },
    data() {
        return {
            navs: [
                {name: 'Dodaj Ogłoszenie', href: '#', id: 2},
                {name: 'Ogłoszenia', href: '#', id: 1},
                {name: 'Zaloguj się', href: '#', id: 3},
                {name: 'Pracodawcy', href: '#', id: 4},
            ],
            MainPage: false,
            CurrentPage: ''
        }
    },
    methods: {
        isItMainPage(id) {
            let index = this.navs.findIndex(el => el.id === id);
            if ( index == 0) {
                this.MainPage = true;
            } else {
                this.MainPage = false;
                this.CurrentPage = this.navs[index].name
            }
        }
    }
}
</script>

<style>
    .nav-elem {
        text-transform: uppercase;
        text-decoration: none;
        font-family: fantasy;
        /* display: inline-block; */
        padding: 10px;
        letter-spacing: 3px;
    }
</style>