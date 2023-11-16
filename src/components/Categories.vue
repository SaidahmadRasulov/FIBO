<template>
  <section class="category__section py-[4rem]">
    <div class="container">
      <div class="category__title text-center">
        <h1 class="text-bold text-[26px] font-bold mb-[4rem]">
          Category <span class="text-[#F7D22D]">Pages</span>
        </h1>
      </div>
      <div class="category__content flex items-center gap-7 flex-wrap">
        <div class="category__card rounded-lg shadow-xl sm:w-[90%] sm:mx-auto md:w-[45%] xl:w-[30%] xl:mx-0"
          v-for="item in filteredData"
          :key="item.id"
        >
          <div class="category__card_header">
            <img :src="`${item.img}`" class="w-[90%] mx-auto" alt="" />
          </div>
          <div class="category__card_body p-5">
            <h2 class="text-[1.4rem]">{{ item.description }}</h2>
            <div class="flex items-center justify-between">
              <h2 class="my-5 font-bold text-[1.3rem]">
                Category:
                <span class="text-[#F7D22D] capitalize">{{
                  item.category
                }}</span>
              </h2>
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
        <div v-if="filteredData.length === 0">
          <p>No items found for the category "{{ category }}"</p>
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
  data() {
    return {
      category: this.$route.params.category,
    };
  },
  watch: {
    "$route.params.category": function (newCategory) {
      this.category = newCategory;
    },
  },
  computed: {
    filteredData() {
      return this.data.filter((item) => item.category === this.category);
    },
  },
  methods: {
    addCart(item) {
      this.$emit('add', item)
    }
  }
};
</script>
