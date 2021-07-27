<template>
    <div>
        <Register v-show="currentPage == 1" @register="addNewUser" :currentPage="currentPage === 1 ? currentPage : 0" />
        <LogIn v-show="currentPage == 2" :users="users" @logIn="userLogged" :currentPage="currentPage === 2 ? currentPage : 0" /> 
        <Nav @isItMainPage="setCurrentPage" :currentPage="currentPage" />
    </div>
</template>

<script>

import Nav from '../NavigationComponents/NavBarComponent.vue';
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
                {login: 'adeal66@w.w', name: 'Adeal', lastName: 'Loreal', nick: 'adeal66', id: 1}
            ],
            currentPage: 1,
            
        }
    },
    computed: {
        newId() {
            return this.users.length + 1
        },
    },
    methods: {
        setCurrentPage(id) {
            this.currentPage = id
        },
        addNewUser(newUser) {
            this.users.push({
                login: newUser.newUserLogin,
                name: newUser.newUserName,
                lastName: newUser.newUserLastName,
                nick: newUser.newUserNick,
                id: this.newId
            });
            this.currentPage = 2;
        },
        userLogged() {
            this.currentPage = 1;
            this.$emit('userLogged')
        }
    },
    watch: {
        $route () {
            this.currentPage = 1;
        }
    }
}
</script>

<style>
    /* input[type=button], input[type=submit], input[type=reset] {
        background-color: #8E793E;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    } */

</style>