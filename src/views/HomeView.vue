<template>
  <main>
    <Swiper />
    <section class="products__section">
      <div class="flex">
        <div class="new__image h-auto">
          <img src="../assets/man.png" alt="" />
        </div>
        <div class="container">
          <div class="new__product_content h-[50vh] pt-16">
            <div class="new__products_title text-[24px] font-bold">
              <h1>Новинки</h1>
            </div>
            <div
              class="new__products h-[50%] flex items-center justify-between"
            >
              <div
                class="new__card rounded-lg flex items-center gap-7 shadow-2xl p-4"
                v-for="n in 4"
              >
                <div class="new__card_header" :key="n">
                  <img src="../assets/newItem.png" alt="" />
                </div>
                <div class="new__card_body font-bold">
                  <h3>
                    Карбонара <br />
                    <span>от 120 ₽</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products :data="data" @add="addCart" />
    </section>
    <miniDiscount />
    <Footer />
  </main>
</template>
<script>
import { RouterLink } from "vue-router";
import Products from "../components/Products.vue";
import miniDiscount from '../components/miniDiscount.vue';
import Footer from '../components/Footer.vue';
import Swiper from "../components/Swiper.vue";

export default {
  components: {
    Swiper,
    Products,
    RouterLink,
    miniDiscount,
    Footer
},
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addCart(item) {
      this.$emit("add", item);
    },
  },
};
</script>
<style lang=""></style>
