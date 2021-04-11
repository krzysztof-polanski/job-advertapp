<template>
        <a @click='isMainPage' :href="nav.href">{{ nav.name }}</a>
</template>


<script>
export default {
    props: ['nav'],
    methods: {
        isMainPage() {
            this.$emit('isMainPage', this.nav.id)
        }
    }
}
</script>