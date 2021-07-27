<template>
    <div class="advert" :class="{ completed: advert.completed }">
        <div class="advert__img-container"><img class="advert__img" :src="advert.logo" alt="advert image"></div>
        <div class="advert__text">
            <h2>{{ advert.title }}</h2>
            <hr class="advert-item__hr">
            <p>Completed: {{ advert.completed }}</p>
            <h3>Salary: ${{ advert.salaryRange }}</h3>
            <p class="advert__description">About Advert: {{ advert.description }}</p>
        </div>
        <button class="btn advert__btn" v-if="!advert.completed && show" @click="closeAdvert">Zrobione</button>
    </div>
</template>

<script>
export default {
    props: ['advert', 'login'],
    computed: {
        show() {
            return this.advert.publishedBy == this.login
        }
    },
    methods: {
        closeAdvert() {
            this.$emit('onAdvertClosed', this.advert.id)
        }
    }
}
</script>