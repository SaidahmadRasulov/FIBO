<template>
  <section class="cart__section">
    <div class="container">
      <div class="cart__title sm:px-[1rem] md:px-3 xl:px-0">
        <h1 class="text-[#F7D22D] text-[36px] font-bold">Корзина</h1>
      </div>
      <div class="cart__content my-[4rem] sm:px-[1rem] md:px-[3rem] xl:px-0">
        <div class="h-[300px] overflow-y-scroll" v-if="cartArray.length > 0">
          <div
            class="cart__card md:flex sm:grid-cols-2 sm:grid items-center gap-[4rem] mb-[2rem] border border-l-0 border-r-0 py-5"
            v-for="item in cartArray"
          >
            <div class="cart__card_header sm:w-[100%] xl:w-[10%] sm:col-span-2">
              <img :src="`${item.img}`" alt="" class="w-full" />
            </div>
            <div class="cart__card_body w-[90%] sm:col-span-3">
              <h2 class="font-bold text-[20px]">{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </div>
            <div
              class="cart__card_footer flex items-center text-end gap-7 sm:col-span-3"
            >
              <span class="text-[#F7D22D] text-[2rem] font-bold">
                {{ item.price }}
              </span>
              <div
                class="h-[30px] count__form flex items-center justify-between bg-[#F3F3F7] gap-7 rounded-lg py-5 px-3"
              >
                <button
                  @click="handleIncrement(item.id)"
                  class="w-full flex items-center text-[20px] text-center h-full"
                >
                  +
                </button>
                <div class="count w-[50%] text-center" v-if="count > 0">
                  {{ item.count }}
                </div>
                <div class="count w-[60%] text-center text-[1.2rem]" v-else>
                  0
                </div>
                <button
                  @click="count--"
                  class="w-full flex items-center text-[20px] text-center h-full"
                >
                  -
                </button>
              </div>
              <i
                class="bx bx-x-circle text-[2rem] cursor-pointer text-[red] hover:text-[#F7D22D]"
                @click="handleDelete(item.id)"
              ></i>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <h1 class="text-[2rem]">
            Not date because you don't take any products
          </h1>
        </div>
      </div>
      <div class="cart__add_section">
        <div class="cart__add_title">
          <h2 class="text-[28px] font-bold text-[#F7D22D]">
            Добавить к заказу?
          </h2>
        </div>
        <div class="cart__add_content my-[3rem]">
          <cartSwiper :candies="candies" @add="handleAdd" />
        </div>
      </div>
      <div class="souces__content my-[4rem]">
        <div class="souces__title mb-[3rem]">
          <h1 class="text-[#F7D22D] text-[2rem] font-bold">Соусы к бортикам и закускам</h1>
        </div>
        <div class="souces__cards flex items-center justify-between">
          <div class="souces_card h-[290px] p-4 gap-4 border-2 border-[#E2E2E9] rounded-2xl w-[15%] hover:border-[#F7D22D] cursor-pointer hover:text-[#F7D22D]" @click="handleAdd(item)" v-for="item in souces">
            <div class="souces_card_header h-[180px] w-full">
              <img :src="`${item.img}`" class="w-full" alt="">
            </div>
            <div class="souces_card_body text-center">
              <h3 class="text-[16px] font-bold h-[50px]">{{item.title}}</h3>
              <p class="text-[#FF2E65] font-bold">от {{ item.price }}p</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import cartSwiper from "../components/cartSwiper.vue";
export default {
  props: {
    cartArray: {
      type: Array,
      required: true,
    },
    candies: {
      type: Array,
      required: true,
    },
    souces: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleDelete(id) {
      this.$emit("delete", id);
    },
    handleIncrement(id) {
      const indexToUpdate = this.cartArray.findIndex((item) => item.id === id);
      this.cartArray = this.cartArray.filter((item) => {
        if (item.id === id) {
          this.$set(this.cartArray, item.id, {
            ...this.cartArray[indexToUpdate],
            count: this.cartArray[indexToUpdate].count + 1,
          });
          this.count += 1;
        }
      });
    },
    handleAdd(item) {
      this.$emit("add", item);
    },
  },
  components: {
    cartSwiper,
  },
};
</script>
<style lang=""></style>
