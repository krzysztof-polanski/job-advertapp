


<template>
  <div class="adverts__container">
    <AddAdvertisementForm v-if="login" @newAdvertAdded="addAdvert" />
    <AdvertItem class="advert-item" v-for="advert in adverts" :key="advert.id" :advert="advert" :login="login" @onAdvertClosed="closeAdvert" />
    <MainComponent :closed="closed" :pending="pending" />
  </div>
</template>

<script>

import AdvertItem from './AdvertItem.vue'
import MainComponent from '../MainComponent.vue'
import AddAdvertisementForm from './AddAdvertisementFormComponent.vue'

export default {
    components: {
        AdvertItem,
        MainComponent,
        AddAdvertisementForm
    },
    props: ['login'],
  data() {
    return {
      adverts: [
        { title: 'Programista front-end', salaryRange: '500-5000', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolore est similique vel ipsam ipsa libero tempore cum hic error ducimus numquam voluptatum deleniti soluta?srvtvhdtryjtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdvyjtyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyvyv', completed: false, publishedBy: 'w@w.w', id: 1, logo: "https://www.logodesign.net/logo/building-on-crescent-4303ld.png?size=2&industry=company"},
        { title: 'Programista backend', salaryRange: '1000-25000', description: 'BLABLABLA', completed: false, publishedBy: 'adeal66@w.w', id: 2, logo: "https://i.pinimg.com/originals/00/08/fd/0008fd13f2b8d824dcc428fa24d71f39.png"}
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
        publishedBy: this.login,
        id: this.newId,
        logo: newAdvert.logo
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
  /* .advert {
    color: olive;
    border: 7px solid #231F20;
    margin: 20px 0px;
    padding: 20px;
  }
  .completed {
    opacity: 0.5;
    text-decoration: line-through;
  }
  .nav-elem {
        text-transform: uppercase;
        text-decoration: none;
        font-family: fantasy;
        display: inline-block;
        padding: 10px;
        letter-spacing: 3px;
    } */
    /* @import '../../assets/styles/style.css'; */
</style>
