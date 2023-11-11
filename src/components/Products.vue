<template>
  <section class="products__section">
    <div class="container mx-auto py-3">
      <div class="first__products_section">
        <h1
          class="first__product__title text-[#F7D22D] text-[32px] font-bold mb-16"
        >
          Паста
        </h1>
        <div
          class="products__content flex justify-between flex-wrap gap-y-14 gap-x-7"
        >
          <div class="product__card w-[20%]" v-for="item in data.slice(0, 8)">
            <div class="product__card_header w-full">
              <img class="w-full" :src="`${item.img}`" alt="" />
            </div>
            <div class="product__card_body my-3">
              <h2 class="text-gray-500 text-[24px] font-bold">
                С креветками и трюфелями
              </h2>
              <p>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
            </div>
            <div class="product__card_footer flex justify-between items-center">
              <div class="product__price font-bold text-[22px]">
                <p>от {{ item.price }}</p>
              </div>
              <div class="product__add_cart">
                <button
                  @click="addCart(item)"
                  class="py-2 px-3 rounded-xl bg-[#F7D22D] text-[#473E43] hover:text-[#FFFFFF] font-[500]"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="second__products_section my-[6rem]">
        <h1
          class="second__product__title text-[#F7D22D] text-[32px] font-bold mb-16"
        >
          Паста
        </h1>
        <div
          class="products__content flex justify-between flex-wrap gap-y-14 gap-x-7"
        >
          <div class="product__card w-[20%]" v-for="item in data.slice(0, 8)">
            <div class="product__card_header w-full">
              <img class="w-full" :src="`${item.img}`" alt="" />
            </div>
            <div class="product__card_body my-3">
              <h2 class="text-gray-500 text-[24px] font-bold">
                С креветками и трюфелями
              </h2>
              <p>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
            </div>
            <div class="product__card_footer flex justify-between items-center">
              <div class="product__price font-bold text-[22px]">
                <p>от {{ item.price }}</p>
              </div>
              <div class="product__add_cart">
                <button
                  @click="addCart(item)"
                  class="py-2 px-3 rounded-xl bg-[#F7D22D] text-[#473E43] hover:text-[#FFFFFF] font-[500]"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="second__products_section my-[6rem]">
        <h1
          class="second__product__title text-[#F7D22D] text-[32px] font-bold mb-16"
        >
          Паста
        </h1>
        <div
          class="products__content flex justify-between flex-wrap gap-y-14 gap-x-7"
        >
          <div class="product__card w-[20%]" v-for="item in data.slice(0, 4)">
            <div class="product__card_header w-full">
              <img class="w-full" :src="`${item.img}`" alt="" />
            </div>
            <div class="product__card_body my-3">
              <h2 class="text-gray-500 text-[24px] font-bold">
                С креветками и трюфелями
              </h2>
              <p>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
            </div>
            <div class="product__card_footer flex justify-between items-center">
              <div class="product__price font-bold text-[22px]">
                <p>от {{ item.price }}</p>
              </div>
              <div class="product__add_cart">
                <button
                  @click="addCart(item)"
                  class="py-2 px-3 rounded-xl bg-[#F7D22D] text-[#473E43] hover:text-[#FFFFFF] font-[500]"
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
