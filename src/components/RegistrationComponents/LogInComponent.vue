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
    data() {
        return {
            login: ''
        }
    },
    methods: {
        logIn() {
            const atPosition = this.login.indexOf('@');
            const userName = this.login.slice(0, atPosition);
            this.login = '';
            this.$router.push('/')
            alert(`Nice to see you again, ${userName}`)
        }
    }
}
</script>