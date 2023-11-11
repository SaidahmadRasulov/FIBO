<script setup>
import { RouterView } from "vue-router";

</script>

<template>
  <header
    :cartArray="cartArray"
    @addCart="handleAddOtherCart"
    :data="data"
    @delete="handleDelete"
    @cartSum="cartSum"
  />
  <RouterView :data="data" @add="handleAddCart"></RouterView>
</template>

<script>
import products from "./data/data";
import header from "./components/Header.vue";

export default {
  data() {
    return {
      cartArray: [],
      data: products,
      cartSum: 4000,
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
};
</script>

<style></style>
