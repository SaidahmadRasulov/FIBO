<template>
    <section class="discount__section h-[100vh] overflow-y-hidden relative">
        <div class="container">
          <div class="discount__title text-center mb-10">
            <h1 class="text-[32px] font-bold">
              Наши <span class="text-[#F7D22D]">акции</span>
            </h1>
          </div>
          <div class="discount__content grid grid-cols-4 gap-4">
            <div class="main_image row-span-3 col-span-2">
              <img class="h-[97%]" src="../assets/discountImage.png" alt="" />
            </div>
            <div class="little_image row-span-1">
              <img class="h-full" src="../assets/discountImage.png" alt="" />
            </div>
            <div class="little_image row-span-1">
              <img
                class="w-full h-full"
                src="../assets/discountImage.png"
                alt=""
              />
            </div>
            <div class="little_image row-span-1">
              <img class="h-full" src="../assets/discountImage.png" alt="" />
            </div>
            <div class="little_image row-span-1 h-full">
              <img
                class="w-full h-full"
                src="../assets/discountImage.png"
                alt=""
              />
            </div>
          </div>
          <div class="discount__button mt-5 text-center">
            <RouterLink to="/discount">
              <button class="text-[white] py-2 px-8 rounded-[40px] bg-[#F7D22D]">
                Все вкции
              </button>
            </RouterLink>
          </div>
        </div>
        <div class="discount__image h-[500px] w-50% absolute bottom-[-20%] right-0">
          <img src="../assets/woman.png" alt="" class="h-full w-full object-cover" />
        </div>
      </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>