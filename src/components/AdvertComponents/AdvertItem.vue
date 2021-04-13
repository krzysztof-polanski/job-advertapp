<template>
    <div class="advert" :class="{ completed: advert.completed }">
        <h2>{{ advert.title }}</h2>
        <p>Completed: {{ advert.completed }}</p>
        <h3>Salary: ${{ advert.salaryRange }}</h3>
        <p>About Advert: {{ advert.description }}</p>
        <button class="advert" v-if="!advert.completed" @click="closeAdvert">Zrobione</button>
    </div>
</template>

<script>
export default {
    props: ['advert'],
    methods: {
        closeAdvert() {
            this.$emit('onAdvertClosed', this.advert.id)
        }
    }
}
</script>