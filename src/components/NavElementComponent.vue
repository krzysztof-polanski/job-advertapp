<template>
        <a :href="nav.href">{{ nav.name }}</a>
</template>


<script>
export default {
    props: ['nav']
}
</script>