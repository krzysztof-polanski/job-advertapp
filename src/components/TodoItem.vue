<template>
    <div class="item" :class="{ completed: item.completed }">
      <h2>{{ item.title }} <span>Completed: {{ item.completed }}</span></h2>
      <button class="item" v-if="!item.completed" @click="closeTodo">Zrobione</button>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        closeTodo() {
            this.$emit('onItemClosed', this.item.id)
        }
    }
}
</script>