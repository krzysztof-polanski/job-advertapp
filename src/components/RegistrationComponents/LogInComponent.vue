<template>
    <div>
        <form @submit.prevent="logIn">
            <label for="login">Login:</label>
            <input type="email" name="login" id="" placeholder="your email" v-model="login">
            <button>Log In</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['users'],
    data() {
        return {
            login: ''
        }
    },
    methods: {
        logIn() {
            // if (this.users.indexOf( el => el == this.login)){
            if (this.users[0].login == this.login){

                const atPosition = this.login.indexOf('@');
            const nick = this.login.slice(0, atPosition);
            this.login = '';
            this.$router.push('/') // odsyła na wskazany rout
            alert(`Nice to see you again, ${nick}`)
            }
        }
    }
}
</script>