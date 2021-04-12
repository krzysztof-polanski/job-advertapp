


<template>
  <div>
    <NavBar />
    <AddAdvertisementForm @newAdvertAdded="addAdvert" />
    <AdvertItem class="nav-elem" v-for="advert in adverts" :key="advert.id" :advert="advert" @onAdvertClosed="closeAdvert" />
    <MainComponent :closed="closed" :pending="pending" />
  </div>
</template>

<script>

import AdvertItem from './AdvertItem.vue'
import MainComponent from './MainComponent.vue'
import NavBar from './NavBarComponent'
import AddAdvertisementForm from './AddAdvertisementFormComponent'

export default {
    components: {
        AdvertItem,
        MainComponent,
        NavBar,
        AddAdvertisementForm
    },
  data() {
    return {
      adverts: [
        { title: 'Zrobić zakupy', salaryRange: '500-5000', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolore est similique vel ipsam ipsa libero tempore cum hic error ducimus numquam voluptatum deleniti soluta?', completed: false, id: 1},
        { title: 'Czekać na żonę', salaryRange: '1000-25000', description: 'BLABLABLA', completed: false, id: 2}
      ],
      newId: 3,
      pending: 2,
      closed: 0
    }
  },
  methods: {
    addAdvert(newAdvert) {
      this.adverts.push({
        title: newAdvert.title,
        salaryRange: `${newAdvert.minSalary}-${newAdvert.maxSalary}`,
        description: newAdvert.description,
        completed: false,
        id: this.newId
      });
      this.newId += 1;
      this.pending += 1
    },
    closeAdvert(id) {
      const index = this.adverts.findIndex(el => el.id === id);
      this.adverts[index].completed = true;
      this.closed += 1;
      this.pending -= 1
    }
  }
}
</script>

<style>
  .advert {
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
