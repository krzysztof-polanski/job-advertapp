<template>

    <div>
        <NavElement class="nav-elem" v-for="nav in navs" :key="nav.id" :nav="nav" />
    </div>

</template>

<script>

import NavElement from './NavElementComponent.vue'

export default {
    components: {
        NavElement,
    },
    data() {
        return {
            navs: [
                {name: 'Ogłoszenia', href: '#', id: 1},
                {name: 'Zaloguj się', href: '#', id: 2},
                {name: 'Pracodawcy', href: '#', id: 3},
            ]
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