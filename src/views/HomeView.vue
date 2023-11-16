<template>
  <main>
    <Swiper />
    <section class="products__section">
      <div class="flex sm:relative xl:relative xl:w-[100%]">
        <div class="new__image h-auto xl:h-[100%] md:h-[80%] md:z-[-10] md:opacity-40 md:absolute sm:opacity-40 sm:absolute sm:z-0 sm:h-[80%] sm:top-[3rem] xl:w-[100%] xl:absolute xl:opacity-100 bottom-0">
          <img src="../assets/man.png" class="h-full" alt="" />
        </div>
        <div class="container xl:w-[100%] sm:relative z-10 md:px-[2rem]">
          <div class="new__product_content w-[100%] md:h-[auto] xl:h-[50vh] pt-16">
            <div class="new__products_title text-[24px] font-bold">
              <h1>Новинки</h1>
            </div>
            <div class="sm:relative sm:z-10 sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-auto new__products h-[100%] flex items-center justify-between gap-7 sm:w-full lg:w-[100%] md:w-[100%] mb-[2rem] product__scroll sm:p-4 md:py-4 md:px-0 xl:p-0">
              <div
                class="new__card white rounded-lg flex items-center gap-7  p-4 sm:w-[80%] md:w-[100%] xl:w-[20%] hover:translate-y-[-1rem] hover:cursor-pointer bg-white"
                v-for="n in 4" 
              >
                <div :class="'new__card_header sm:w-[100%] xl:w-[100%] md:w-[30%] '" :key="n">
                  <img src="../assets/newItem.png" class="w-[100%] h-full" alt="" />
                </div>
                <div class="new__card_body font-bold sm:w-[100%] md:w-[35%] xl:w-[100%]">
                  <h3 class="md:text-[10px] xl:text-[16px] sm:text-[10px]">
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
  </main>
</template>
<script>
import { RouterLink } from "vue-router";
import Products from "../components/Products.vue";
import miniDiscount from '../components/miniDiscount.vue';
import Swiper from "../components/Swiper.vue";

export default {
  components: {
    Swiper,
    Products,
    RouterLink,
    miniDiscount,
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
