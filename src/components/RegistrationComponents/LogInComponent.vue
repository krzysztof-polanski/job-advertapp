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
                this.$router.push('/') // odsyła na wskazany rout
                alert(`Nice to see you, ${nick}`)
            } else {
                alert(`We do not have ${this.login} in our list of registered users!`)
            }
            this.login = '';
            this.$emit('logIn');
        }
    }
}
</script>