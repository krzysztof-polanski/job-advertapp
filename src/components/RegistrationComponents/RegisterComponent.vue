<template>
    <div>
        <form @submit.prevent="register">
            <label for="login"><span class="form__span--required">*</span>Login:</label>
            <input type="email" name="login" id="" placeholder="twój email" v-model="newUser.newUserLogin" ref="newUserLogin" required>
            <label for="user-name"><span class="form__span--required">*</span>Imię:</label>
            <input type="text" name="user-name" id="" placeholder="twoje imię" v-model="newUser.newUserName" required>
            <label for="user-last-name"><span class="form__span--required">*</span>Nazwisko:</label>
            <input type="text" name="user-last-name" id="" placeholder="twoje nazwisko" v-model="newUser.newUserLastName" required>
            <input class="form__submit" type="submit" value="Register">
        </form>
    </div>
</template>

<script>
export default {
    props: ['currentPage'],
    data() {
        return {
            newUser: {
                newUserLogin: '',
                newUserName: '',
                newUserLastName: '',
                newUserNick: ''
            },
        }
    },
    computed: {
        fakeRender() {
            return this.currentPage
        }
    },
    methods: {
        register() {
            const atIndex = this.newUser.newUserLogin.indexOf('@');
            this.newUser.newUserNick = this.newUser.newUserLogin.slice(0, atIndex);
            this.$emit('register', this.newUser)
            alert(`Nice to meet you, ${this.newUser.newUserNick}. Now you can sign in.`)
            this.clearForm();
            // this.$router.push('/registration/login'); // przenosi do routu logowania - brak routu
        },
        clearForm() {
            this.newUser.newUserLogin = '';
            this.newUser.newUserName = '';
            this.newUser.newUserLastName = '';
            this.newUser.newUserNick = ''
        }
    },
    watch: {
        $route () {
            this.$refs.newUserLogin.focus();
        },
        fakeRender: function() {
            this.$refs.newUserLogin.focus();
        }
    }
}
</script>