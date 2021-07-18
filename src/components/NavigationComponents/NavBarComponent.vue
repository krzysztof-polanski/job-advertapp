<template>

    <div class="nav registration__smallNav">
        <NavElement class="nav-elem" v-for="nav in navs" :key="nav.id" :nav="nav" @isMainPage="isItMainPage" :class="{ selected: currentPage === nav.id }" />
        <!-- <PageTitle v-if="!MainPage" :currentPage="currentPage" /> -->
    </div>

</template>

<script>

import NavElement from './NavElementComponent.vue'
// import PageTitle from './PageTitleComponent.vue'

export default {
    props: ['currentPage'],
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
            curPage: this.currentPage
        }
    },
    methods: {
        isItMainPage(id) {
            let index = this.navs.findIndex(el => el.id === id);
            this.curPage = this.navs[index].id
            this.$emit('isItMainPage', this.curPage)
        }
    }
}
</script>

<style>
    /* .registration__smallNav {
        border: none
    } */

    /* .selected {
    color: #8E793E;
    } */
</style>