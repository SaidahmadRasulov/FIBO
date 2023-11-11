import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Categories from '../components/Categories.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories/:category',
      name: 'category',
      component: Categories
    }
  ]
})

export default router
