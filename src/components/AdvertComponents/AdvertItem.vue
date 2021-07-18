<template>
    <div class="advert dark-gold" :class="{ completed: advert.completed }">
        <h2>{{ advert.title }}</h2>
        <hr class="advert-item__hr">
        <p>Completed: {{ advert.completed }}</p>
        <h3>Salary: ${{ advert.salaryRange }}</h3>
        <p>About Advert: {{ advert.description }}</p>
        <button class="btn advert" v-if="!advert.completed && show" @click="closeAdvert">Zrobione</button>
    </div>
</template>

<script>
export default {
    props: ['advert', 'login'],
    computed: {
        show() {
            return this.advert.publishedBy == this.login ? true : false
        }
    },
    methods: {
        closeAdvert() {
            this.$emit('onAdvertClosed', this.advert.id)
        }
    }
}
</script>