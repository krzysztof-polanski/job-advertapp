


<template>
  <div>
    <div class="item">
      <h2>Dodaj nowe ToDo:</h2>
      <input type="text" name="" id="" placeholder="todo" v-model="newItem">
      <button class="item" @click="addItem">add todo</button>
    </div>
    <TodoItem v-for="item in items" :key="item.id" :item="item" @onItemClosed="closeTodo" />
    <MainComponent :closed="closed" :pending="pending" @fuckThisShit="setBGColor" />
  </div>
</template>

<script>

import TodoItem from './TodoItem.vue'
import MainComponent from './MainComponent.vue'
export default {
    components: {
        TodoItem,
        MainComponent
    },
  data() {
    return {
      items: [
        { title: 'Zrobić zakupy', completed: false, id: 1},
        { title: 'Czekać na żonę', completed: false, id: 2}
      ],
      newItem: '',
      newId: 3,
      pending: 2,
      closed: 0
    }
  },
  methods: {
    addItem() {
      this.items.push({
        title: this.newItem, completed: false, id: this.newId
      });
      this.newId += 1;
      this.newItem = '';
      this.pending += 1
    },
    closeTodo(id) {
      const index = this.items.findIndex(el => el.id === id);
      this.items[index].completed = true;
      this.closed += 1;
      this.pending -= 1
    },
    setBGColor() {
      this.newItem = 'WYBIERZ COŚ NOWEGO!'
      alert('Box has been clicked')
    }
  }
}
</script>

<style>
  .item {
    color: olive;
    border: 1px solid blueviolet;
    margin: 20px 10px;
    padding: 20px;
  }
  .completed {
    opacity: 0.5;
    text-decoration: line-through;
  }
</style>
