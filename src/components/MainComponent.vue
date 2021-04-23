<template>
    <div class="container">
        <h2 class="closed-box">Do zrobienia: {{ pending }}</h2>
        <h2 class="closed-box" @click="colorBG">Zrobione: {{ closed }}</h2>
    </div>
</template>

<script>
export default {
    props: ['closed', 'pending'],
    methods: {
        colorBG() {
            const box = this.closed
            this.$emit('doSomething', box)
        }
    }
}
</script>

<style>
    .closed-box {
        width: 100px;
        height: 100px;
        padding: 20px;
        margin: 20px;
        border: 2px solid black;
        text-align: center;
        vertical-align: middle;
    }
    .container {
        display: flex;
        justify-content: baseline;
    }
</style>