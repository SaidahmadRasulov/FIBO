<template>
  <section class="products__section">
    <div class="container mx-auto py-3 sm:px-3 md:px-0">
      <div class="first__products_section">
        <h1
          class="first__product__title text-[#F7D22D] text-[32px] font-bold mb-16 md:px-[2rem] xl:px-0"
        >
          Паста
        </h1>
        <div
          class="products__content lg:flex xl:flex justify-between 
           flex-wrap md:gap-y-14 xl:gap-y-14 xl:gap-x-7"
        >
          <div class="product__card lg:w-[40%] sm:grid sm:mb-[5rem] md:mb-0 xl:block sm:grid-cols-2 sm:grid-rows-1 xl:w-[20%] xl:flex-col sm:w-[100%] sm:mx-auto lg:gap-5" v-for="item in data.slice(0, 8)">
            <div class="product__card_header w-full sm:grid-rows-2">
              <img class="w-full" :src="`${item.img}`" alt="" />
            </div>
            <div class="product__card_body my-3">
              <h2 class="text-gray-500 sm:text-[10px] text-[24px] font-bold lg:text-[10px] xl:text-[24px]">
                С креветками и трюфелями
              </h2>
              <p class="sm:text-[14px] lg:text-[10px] xl:text-[13px]">
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
            </div>
            <div class="product__card_footer lg:gap-5 flex sm:gap-10 sm:w-[100%]  text-center items-center sm:col-span-2">
              <div class="product__price font-bold text-[22px]">
                <p>от {{ item.price }}</p>
              </div>
              <div class="product__add_cart">
                <button
                  @click="addCart(item)"
                  class="py-2 px-3 rounded-xl bg-[#F7D22D] text-[#473E43] hover:text-[#FFFFFF] font-[500] sm:text-[18px]"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="second__products_section sm:my-[6rem] xl:my-[6rem]">
        <h1
          class="second__product__title text-[#F7D22D] text-[32px] font-bold mb-16 md:px-[2rem]"
        >
          Паста
        </h1>
        <div
          class="products__content lg:flex xl:flex justify-between flex-wrap gap-y-14 gap-x-7"
        >
          <div class="product__card lg:w-[40%] sm:mb-[4rem] md:mb-0 sm:grid xl:block sm:grid-cols-2 sm:grid-rows-1 xl:w-[20%] xl:flex-col sm:w-[100%] sm:mx-auto lg:gap-5" v-for="item in data.slice(0, 8)">
            <div class="product__card_header w-full sm:grid-rows-2">
              <img class="w-full" :src="`${item.img}`" alt="" />
            </div>
            <div class="product__card_body my-3">
              <h2 class="text-gray-500 sm:text-[10px] text-[24px] font-bold lg:text-[10px] xl:text-[24px]">
                С креветками и трюфелями
              </h2>
              <p class="sm:text-[14px] lg:text-[10px] xl:text-[13px]">
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
            </div>
            <div class="product__card_footer lg:gap-5 flex sm:gap-10 sm:w-[100%]  text-center items-center sm:col-span-2">
              <div class="product__price font-bold text-[22px]">
                <p>от {{ item.price }}</p>
              </div>
              <div class="product__add_cart">
                <button
                  @click="addCart(item)"
                  class="py-2 px-3 rounded-xl bg-[#F7D22D] text-[#473E43] hover:text-[#FFFFFF] font-[500] sm:text-[18px]"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="third__products_section sm:mb-[6rem] xl:mb-[6rem]">
        <h1
          class="third__product__title text-[#F7D22D] text-[32px] font-bold mb-16 md:px-[2rem] xl:px-0"
        >
          Паста
        </h1>
        <div
          class="products__content lg:flex xl:flex justify-between flex-wrap gap-y-14 gap-x-7"
        >
          <div class="product__card lg:w-[40%] sm:mb-[4rem] md:mb-0 sm:grid xl:block sm:grid-cols-2 sm:grid-rows-1 xl:w-[20%] xl:flex-col sm:w-[100%] sm:mx-auto lg:gap-5" v-for="item in data.slice(0, 4)">
            <div class="product__card_header w-full sm:grid-rows-2">
              <img class="w-full" :src="`${item.img}`" alt="" />
            </div>
            <div class="product__card_body my-3">
              <h2 class="text-gray-500 sm:text-[10px] text-[24px] font-bold lg:text-[10px] xl:text-[24px]">
                С креветками и трюфелями
              </h2>
              <p class="sm:text-[14px] lg:text-[10px] xl:text-[13px]">
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
            </div>
            <div class="product__card_footer lg:gap-5 flex sm:gap-10 sm:w-[100%]  text-center items-center sm:col-span-2">
              <div class="product__price font-bold text-[22px]">
                <p>от {{ item.price }}</p>
              </div>
              <div class="product__add_cart">
                <button
                  @click="addCart(item)"
                  class="py-2 px-3 rounded-xl bg-[#F7D22D] text-[#473E43] hover:text-[#FFFFFF] font-[500] sm:text-[18px]"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
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
