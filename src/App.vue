<script>

</script>

<template>
  <Header
    :cartArray="cartArray"
    @addCart="handleAddOtherCart"
    :data="data"
    @delete="handleDelete"
    @cartSum="cartSum"
  />
  <RouterView
    :data="data"
    :discountData="discountData"
    @add="handleAddCart"
  ></RouterView>
  <Footer />
</template>

<script>
import products from "./data/data";
import discount from "./data/discountData";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      cartArray: [],
      data: products,
      cartSum: 4000,
      discountData: discount,
    };
  },
  methods: {
    handleAddCart(item) {
      this.cartArray.push(item);
    },
    handleDelete(id) {
      this.cartArray = this.cartArray.filter((item) => item.id !== id);
    },
    handleAddOtherCart(item) {
      this.cartArray.push(item);
    },
  },
  components: {
    Header,
    RouterView,
    Footer,
  },
};
</script>

<style></style>
