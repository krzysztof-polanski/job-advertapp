<template>
    <div>
        <Nav @isItMainPage="setCurrentPage" />
        <Register v-show="currentPage == 1" />
        <LogIn v-show="currentPage == 2" :users="users" />  
    </div>
</template>

<script>

import Nav from '../NavigationComponents/NavBarComponent.vue'
import Register from './RegisterComponent.vue';
import LogIn from './LogInComponent.vue';

export default {
    components: {
        Nav,
        Register,
        LogIn
    },
    data() {
        return {
            users: [
                {login: 'adeal66@w.w', name: 'Adeal', lastName: 'Loreal', nick: 'adeal66'}
            ],
            currentPage: 1
        }
    },
    methods: {
        setCurrentPage(id) {
            this.currentPage = id
        }
    }
}
</script>