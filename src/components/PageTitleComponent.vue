<template>
    <h4>{{ pageName }}</h4>
</template>

<script>
export default {
    props: ['CurrentPage'],
    computed: {
        pageName: function () {
            return this.CurrentPage.toUpperCase()
        }
    }
}
</script>