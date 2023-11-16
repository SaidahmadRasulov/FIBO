<template>
  <Header
    :cartArray="cartArray"
    @addCart="handleAddOtherCart"
    :data="data"
    @delete="handleDelete"
    :cartSum="cartSum"
    @summary="handleSummary"
    :otherData="otherData"
  />
  <RouterView
    :data="data"
    :discountData="discountData"
    @add="handleAddCart"
    :cartArray="cartArray"
    @delete="handleDelete"
    :otherData="otherData"
    :candies="candies"
    :souces="souces"
  ></RouterView>
  <Footer />
</template>

<script>
import products from "./data/data";
import discount from "./data/discountData";
import otherData from "./data/otherData";
import candies from "./data/candyData";
import souces from "./data/souces";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      cartArray: [],
      data: products,
      cartSum: 0,
      discountData: discount,
      otherData: otherData,
      candies: candies,
      souces: souces
    };
  },
  methods: {
    handleAddCart(item) {
      this.cartArray.push(item);
    },
    handleDelete(id) {
      const indexToRemove = this.cartArray.findIndex((item) => item.id === id);
      if (indexToRemove !== -1) {
        this.cartArray.splice(indexToRemove, 1);
      }
    },
    handleAddOtherCart(item) {
      this.cartArray.push(item);
    },
    handleSummary(item, count) {
      this.cartSum = count * item.price;
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
