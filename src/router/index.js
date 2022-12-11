import { createRouter, createWebHistory } from 'vue-router'
import ForHim from "@/pages/ForHim.vue"
import ForHer from '@/pages/ForHer.vue'
import Unisex from '@/pages/Unisex.vue'
import MainPageVue from '@/pages/MainPage'
import ItemIdPage from '@/pages/ItemIdPage'
import Contacts from '@/pages/Contacts'
import AboutPage from '@/pages/AboutPage'

const routes = [
  {
    path:'/',
    component: MainPageVue
  },
  {
    path:'/for_him',
    component: ForHim
  },
  {
    path:'/for_her',
    component: ForHer
  },
  {
    path:'/unisex',
    component: Unisex
  },
  {
    path:'/store/:id',
    component: ItemIdPage,
  },
  {
    path:'/contacts',
    component: Contacts,
  },
  {
    path:'/about',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
