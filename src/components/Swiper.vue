<template>
  <div class="home_swiper_section">
    <div class="swiper__content sm:h-[40vh] md:h-auto xl:h-[60vh]">
      <swiper
        :slidesPerView="4"
        :navigation="true"
        :modules="modules"
        :loop="true"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/first_slide.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/second_slide.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/first_slide.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/second_slide.png" alt="" />
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/second_slide.png" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../custom.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<style lang=""></style>
