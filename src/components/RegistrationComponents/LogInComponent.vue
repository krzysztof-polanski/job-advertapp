<template>
    <div>
        <form @submit.prevent="logIn">
            <label for="login">Login:</label>
            <input type="email" name="login" id="" placeholder="your email" v-model="login" ref="login" >
            <input type="submit">
        </form>
    </div>
</template>

<script>

import { EventBus } from '../../event-bus';

export default {
    props: ['users', 'currentPage'],
    data() {
        return {
            login: ''
        }
    },
    computed: {
        fakeRender() {
            return this.currentPage
        }
    },
    methods: {
        logIn() {
            let isInDB = false;
            let nick;
            for ( const user of this.users ) {
                for ( const [key, value] of Object.entries(user) ) {
                    if(`${key}: ${value}` == `login: ${this.login}`) {
                        const atPosition = this.login.indexOf('@');
                        nick = this.login.slice(0, atPosition);
                        isInDB = true;
                    }
                }
            }
            
            if (isInDB) {
                console.log('YOU ARE LOGGED IN, pkp!');
                this.$router.push({ name:'LoggedIn', params: {login: this.login} }) // odsyła na wskazany rout
                alert(`Nice to see you, ${nick}`)
            } else {
                alert(`We do not have ${this.login} in our list of registered users!`)
            }
            EventBus.$emit('logIn', this.login);
            this.login = '';


            this.$emit('logIn');
        }
    },
    watch: {
        $route () {
            this.$refs.login.focus();
        },
        fakeRender: function() {
            this.$refs.login.focus();
        }
    }
}
</script>