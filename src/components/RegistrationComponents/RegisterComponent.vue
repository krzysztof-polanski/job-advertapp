<template>
    <div>
        <form @submit.prevent="register">
            <label for="login">Login:</label>
            <input type="email" name="login" id="" placeholder="twój email" v-model="login">
            <label for="user-name">Imię:</label>
            <input type="text" name="user-name" id="" placeholder="twoje imię" v-model="userName">
            <label for="user-last-name">Nazwisko:</label>
            <input type="text" name="user-last-name" id="" placeholder="twoje nazwisko" v-model="userLastName">
            <button>Zarejestruj się</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: '',
            userName: '',
            userLastName: '',
            users: [
                // {login: 'adeal66@w.w', name: 'Adeal', lastName: 'Loreal', nick: 'adeal66'}
                'adeal66@w.w'
            ]
        }
    },
    methods: {
        register() {
            const atPosition = this.login.indexOf('@');
            const nick = this.login.slice(0, atPosition);
            this.login = '';
            this.userName = '';
            this.userLastName = '';
            this.$router.push('/registration/login')
            alert(`Nice to meet you, ${nick}`)
        }
    }
}
</script>