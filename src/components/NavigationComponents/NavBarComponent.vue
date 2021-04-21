<template>

    <div class="nav-container">
        <NavElement class="nav-elem" v-for="nav in navs" :key="nav.id" :nav="nav" @isMainPage='isItMainPage' />
        <!-- <PageTitle v-if="!MainPage" :CurrentPage="CurrentPage" /> -->
    </div>

</template>

<script>

import NavElement from './NavElementComponent.vue'
// import PageTitle from './PageTitleComponent.vue'

export default {
    components: {
        NavElement,
        // PageTitle
    },
    data() {
        return {
            navs: [
                {name: 'Zarejestruj się', href: '#', id: 1},
                {name: 'Zaloguj się', href: '#', id: 2}
            ],
            // MainPage: false,
            CurrentPage: 1
        }
    },
    methods: {
        isItMainPage(id) {
            let index = this.navs.findIndex(el => el.id === id);
            this.CurrentPage = this.navs[index].id
            this.$emit('isItMainPage', this.CurrentPage)
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
        padding: 20px;
        letter-spacing: 3px;
        font-size: 2vh;
    }
    .nav-container {
        padding: 20px;
        border-bottom: 2px solid purple;
    }
</style>