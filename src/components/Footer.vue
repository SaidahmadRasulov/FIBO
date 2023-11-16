<template>
  <section class="footer__bottom_section py-[4rem] sm:px-[1rem] xl:px-0">
    <div class="container flex justify-between sm:flex-col xl:flex-row">
      <div class="bottom_section_title xl:w-[40%] sm:w-[100%]">
        <div class="bottom__logo">
          <img src="../assets/Logo.png" alt="">
        </div>
        <ul class="bottom_title_group grid grid-cols-2 font-bold gap-y-5 mt-[3rem] mb-[1rem]">
          <li>Калорийность и состав</li>
          <li>Правовая информация</li>
          <li>Мы в соцсетях</li>  
        </ul>
        <ul class="bottom_title_socials grid grid-cols-3 gap-2">
          <li class="socials_item">
            <a href="https://www.youtube.com" target="_blank">
              YouTube
            </a>
          </li>
          <li class="socials_item">
            <a href="https://www.facebook.com" target="_blank">
              Facebook
            </a>
          </li>
          <li class="socials_item">
            Москва ул. Проспект
          </li>
          <li class="socials_item">
            <a href="https://www.instagram.com" target="_blank">
              Instagram
            </a>
          </li>
          <li class="socials_item">
            <a href="https://www.vk.com" target="_blank">
              ВКонтакте
            </a>
          </li>
          <li class="socials_item">
            Вернадского 86В
          </li>
        </ul>
        <div class="bottom_copywrite flex justify-between mt-[3rem] items-center">
          <p class="font-bold text-[14px]">YaBao Все праав защищены © 2021</p>
          <ul class="copywrite_group flex items-center gap-3">
            <li class="copywrite_item visa">
              <img src="../assets/visa.png" alt="">
            </li>
            <li class="copywrite_item paypal">
              <img src="../assets/paypal.png" alt="">
            </li>
            <li class="copywrite_item master">
              <img src="../assets/sber.png" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom_section_content xl:w-[40%] sm:w-[100%]">
        <h2 class="uppercase font-bold ">Остались вопросы? А мы всегда на связи:
        </h2>
        <ul class="bottom_content_socials grid grid-cols-4 mt-[3rem] gap-3 text-center">
          <li class="rounded-xl hover:translate-y-[-.5rem] hover:cursor-pointer content_social_item py-1 px-5 border-[3px] border-[#E3ECF5]">
            <a href="https://www.viber.com" target="_blank">
              <img src="../assets/viber.png" class="mx-auto" alt="">
            </a>
          </li>
          <li class="rounded-xl hover:translate-y-[-.5rem] hover:cursor-pointer content_social_item py-1 px-5 border-[3px] border-[#E3ECF5]">
            <a href="https://www.skype.com" target="_blank">
            <img src="../assets/skype.png" class="mx-auto" alt="">
            </a>
          </li>
          <li class="rounded-xl hover:translate-y-[-.5rem] hover:cursor-pointer content_social_item py-1 px-5 border-[3px] border-[#E3ECF5]">
            <a href="https://www.messenger.com" target="_blank">
            <img src="../assets/messenger.png" class="mx-auto" alt="">

            </a>
          </li>
          <li class="rounded-xl hover:translate-y-[-.5rem] hover:cursor-pointer content_social_item py-1 px-5 border-[3px] border-[#E3ECF5]">
            <a href="https://www.telegram.com" target="_blank">
            <img src="../assets/telegram.png" class="mx-auto" alt="">

            </a>
          </li>
          <li class="rounded-xl hover:translate-y-[-.5rem] hover:cursor-pointer content_social_item py-1 px-5 border-[3px] border-[#E3ECF5]">
            <a href="https://www.facebook.com" target="_blank">
            <img src="../assets/facebook.png" class="mx-auto" alt="">
            </a>
          </li>
          <li class="rounded-xl hover:translate-y-[-.5rem] hover:cursor-pointer content_social_item py-1 px-5 border-[3px] border-[#E3ECF5]">
            <a href="https://www.vk.com" target="_blank">
            <img src="../assets/vk.png" class="mx-auto" alt="">
            </a>
          </li>
          <li class="rounded-xl hover:translate-y-[-.5rem] hover:cursor-pointer content_social_item py-1 px-5 border-[3px] border-[#E3ECF5] col-span-2">
            <RouterLink to="/contact">Написать нам</RouterLink>
          </li>
        </ul>
        <div class="bottom_contact mt-[3rem]">
          <h1 class="text-[#F7D22D] mb-[1rem] text-[32px] font-bold">+998 90-813-17-20</h1>
          <a href="tel:+998908131720">
            <button class="text-[#696F7A] border-2 hover:border-[#F7D22D] hover:text-[white] hover:bg-[#F7D22D] py-3 px-5 bg-[#F3F3F7] rounded-[3rem] font-bold">Заказать звонок</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import miniDelivery from './miniDelivery.vue'
export default {
  components: {
    miniDelivery
  }
};
</script>
<style lang=""></style>
