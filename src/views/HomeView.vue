<template>
  <main>
    <Swiper />
    <section class="products__section">
      <div class="flex relative">
        <div class="new__image h-auto md:h-[80%] md:z-[-10] md:opacity-40 md:absolute xl:relative xl:opacity-100 bottom-0">
          <img src="../assets/man.png" class="h-full" alt="" />
        </div>
        <div class="container">
          <div class="new__product_content md:h-[auto] xl:h-[50vh] pt-16">
            <div class="new__products_title text-[24px] font-bold">
              <h1>Новинки</h1>
            </div>
            <div class="sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-auto new__products h-[100%] flex items-center justify-between gap-7 lg:w-[100%] md:w-[100%] mb-[2rem] product__scroll">
              <div
                class="new__card bg-white rounded-lg flex items-center gap-7  p-4 md:w-[100%] xl:w-[20%] sm:w-[100%]"
                v-for="n in 4"
              >
                <div class="new__card_header xl:w-[100%] md:w-[30%] sm:w-[50%]" :key="n">
                  <img src="../assets/newItem.png" class="w-full" alt="" />
                </div>
                <div class="new__card_body font-bold sm:w-[20%] md:w-[30%] xl:w-[100%]">
                  <h3 class="md:text-[10px] xl:text-[16px]">
                    Карбонара <br />
                    <span class="text-[#F7D22D]">от 120 ₽</span>
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
