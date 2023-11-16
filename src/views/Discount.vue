<template>
  <section id="discount" class="discount__section py-7 mb-[5rem] sm:px-[1rem] md:px-[1rem]">
    <div class="container">
      <div class="discount__title mb-[4rem]">
        <h1 class="text-[#F7D22D] text-[32px] font-bold">Акции</h1>
      </div>
      <div class="discount__content flex flex-wrap justify-between gap-[2rem]">
        <div
          class="discount_card shadow-lg rounded-lg sm:w-[100%] sm:mx-auto md:mx-0 md:w-[45%] xl:w-[30%]"
          v-for="item in discountData"
        >
          <div class="disctount_card_header sm:w-full">
            <img :src="`${item.image}`" class="w-full" alt="" />
          </div>
          <div class="disctount_card_body my-[1.3rem] p-4">
            <h2 class="text-[1.5rem] font-bold">{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
          <div class="disctount_card_footer p-4">
            <RouterLink :to="`/discount/${item.id}`">
              <button class="bg-[#F7D22D] py-2 px-4 rounded-xl">
                Посмотреть
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    discountData: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
