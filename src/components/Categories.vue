<template>
    <section class="category__section py-[4rem]">
      <div class="container">
        <div class="category__title text-center">
          <h1 class="text-bold text-[26px] font-bold mb-[4rem]">Category <span class="text-[#F7D22D]">Pages</span></h1>
        </div>
        <div class="category__content flex items-center gap-7 flex-wrap">
          <div class="category__card rounded-lg shadow-xl w-[30%]" v-for="item in filteredData" :key="item.id">
            <div class="category__card_header">
                <img :src="`${item.img}`" class="w-[90%] mx-auto" alt="">
            </div>
            <div class="category__card_body p-5">
              <h2 class="text-[1.4rem]">{{item.description}}</h2>
              <h2 class="my-5 font-bold text-[1.3rem]">Category: <span class="text-[#F7D22D] capitalize">{{ item.category }}</span></h2>
            </div>
          </div>
          <div v-if="filteredData.length === 0">
            <p>No items found for the category "{{ category }}"</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </template>
  
  <script>
import Footer from './Footer.vue';

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
        '$route.params.category': function (newCategory) {
            this.category = newCategory;
        },
    },
    computed: {
        filteredData() {
            return this.data.filter(item => item.category === this.category);
        },
    },
    components: { Footer }
};
  </script>
  