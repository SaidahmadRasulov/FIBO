import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Categories from '../components/Categories.vue';
import Discount from '../views/Discount.vue';
import discountSingle from '../views/discountSingle.vue';
import Cart from '../views/Cart.vue'

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
    },
    {
      path: '/discount',
      name: 'discount',
      component: Discount
    },
    {
      path: '/discount/:id',
      name: 'singlePageDiscount',
      component: discountSingle
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

export default router
