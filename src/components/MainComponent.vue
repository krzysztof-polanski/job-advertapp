<template>
    <div class="mainComponent__boxes-container">
        <h2 class="closed-box">Aktywne oferty: {{ pending }}</h2>
        <h2 class="closed-box" @click="colorBG">Zamknięte oferty: {{ closed }}</h2>
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
        width: 40%;
        height: 100px;
        line-height: 100px;
        padding: 20px;
        margin: 20px;
        border: 2px solid black;
        text-align: center;
        vertical-align: middle;
    }
    .mainComponent__boxes-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
</style>