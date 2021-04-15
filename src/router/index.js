import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Advertisements from '../views/Advertisements.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Advertisements',
    component: Advertisements
  },
  {
    path: '/registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
