<template>
  <div class="cart_swiper_section ">
    <div class="container">
        <Swiper
      :navigation="true"
      :modules="modules"
      :slidesPerView="3"
      :loop="true"
      class="h-[90vh]"
    >
      <swiper-slide class="cart_other_card text-left flex gap-8 p-2 border-2 rounded-lg" v-for="item in candies" @click="addItem(item)">
        <div class="cart_card_header w-[30%]">
            <img :src="`${item.img}`" class="w-full" alt="">
        </div>
        <div class="cart_card_body w-[70%] text-left">
            <h3 class="text-[1.2rem] w-[100%] font-[500]">{{ item.title }}</h3>
            <p class="text-[#FF2E65] font-bold">от {{item.price}}p</p>
        </div>
      </swiper-slide>
    </Swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import '../cartStyles.css';
export default {
  props: {
    candies: {
      type: Array,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
        modules: [Navigation]
    }
  },
  methods:{
    addItem(item) {
        this.$emit('add', item)
    }
  }
};
</script>
<style lang=""></style>
