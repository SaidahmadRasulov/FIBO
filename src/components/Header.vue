<template>
  <header>
    <div class="container md:py-3 mx-auto">
      <div class="navbar md:py-2">
        <div
          class="navbar__top sm:py-4 md:py-0 flex items-center relative justify-between px-5"
        >
          <div class="navbar__logo flex items-center gap-8">
            <div class="logo__image sm:absolute md:relative z-50">
              <RouterLink to="/">
                <img src="../assets/Logo.png" alt="" />
              </RouterLink>
            </div>
            <div class="logo__information sm:hidden xl:block">
              <h2 class="text-[20px] font-[600]">
                Доставка пасты <span class="text-[#FFC816]">Uzbekistan</span>
              </h2>
              <ul class="logo__inform_group flex items-center gap-4">
                <li class="inform_group_item flex items-center gap-2">
                  <img src="../assets/circleIcon.png" alt="" />
                  <strong>Яндекс еда</strong>
                  <div
                    class="small_circle w-[5px] h-[5px] rounded-full bg-red-800"
                  ></div>
                  <strong>4.8</strong>
                  <i class="bx bxs-star text-[#FFC816]"></i>
                </li>
                <li class="inform_group_item flex items-center gap-2">
                  <strong>Время доставки</strong>
                  <div
                    class="small_circle w-[5px] h-[5px] rounded-full bg-red-800"
                  ></div>
                  <strong>от 31 мин</strong>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="navbar__contact sm:hidden lg:hidden xl:flex items-center gap-4"
          >
            <a href="tel:+998908131720">
              <button
                class="bg-[#F3F3F7] py-2 px-6 rounded-3xl text-[#696F7A] font-bold"
              >
                Заказать звонок
              </button>
            </a>
            <h2 class="text-[#F7D22D] font-bold text-[26px]">
              +998 90 813-17-20
            </h2>
          </div>
          <div
            class="navbar__media_content sm:block md:block lg:flex xl:hidden lg:items-center lg:gap-5 md:py-3 xl:py-0"
            ref="navbar__media_ref"
          >
            <div class="fixed__image hidden">
              <RouterLink to="/">
                <img src="../assets/Logo.png" :class="toggleBlock" alt="" />
              </RouterLink>
            </div>
            <h2 class="sm:hidden lg:block text-[20px] font-bold">
              8 499 391-84-49
            </h2>
            <div
              class="sm:hidden lg:block"
              @mouseenter="handleShow"
              @mouseleave="handleShow"
            >
              <RouterLink to="/cart">
                <button
                  class="font-bold btn_cart py-2 px-3 bg-[#F7D22D] rounded-md"
                >
                  Корзина | {{ this.cartArray.length }}
                </button>
              </RouterLink>
              <div
                class="cart__content w-[300px] h-[590px] bg-[#F7D22D] absolute right-0 z-[999] hidden shadow-2xl border-[3px] border-[#F7D22D] rounded-lg"
                ref="content"
                v-if="this.cartArray.length > 0"
              >
                <div
                  class="cart__content_cards px-4 h-[150px] overflow-y-scroll"
                >
                  <div
                    class="cart__mini_card w-full my-2 p-2 border-b-2 flex justify-between"
                    v-for="item in this.cartArray"
                  >
                    <div class="mini_card_header w-[25%] h-[100%]">
                      <img
                        class="w-[100%] h-[100%]"
                        :src="`${item.img}`"
                        alt=""
                      />
                    </div>
                    <div class="mini_card_body w-[50%]">
                      <h2 class="text-[14px] mb-2">{{ item.title }}</h2>
                      <div
                        class="h-[30px] count__form flex items-center justify-between bg-[#F3F3F7]"
                      >
                        <button
                          @click="count++"
                          class="w-full text-[20px] text-center"
                        >
                          +
                        </button>
                        <div class="count w-[20%] text-center" v-if="count > 0">
                          {{ count }}
                        </div>
                        <div class="count w-[20%] text-center" v-else>0</div>
                        <button
                          @click="count--"
                          class="w-full text-[20px] text-center"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div class="mini_card_footer h-full">
                      <i
                        @click="handleDelete(item.id)"
                        class="cursor-pointer bx bx-x-circle text-[20px] mb-8"
                      ></i>
                      <p>{{ item.price }}</p>
                    </div>
                  </div>
                </div>
                <div class="cart__sum px-3 flex items-center mt-1">
                  <h2>Сумма заказа</h2>
                  <span class="text-black text-[40px]">{{ cartSum }}</span>
                </div>
                <div class="cart__other_title px-3">
                  <h2 class="text-[#FF2E65]">Добавить к заказу?</h2>
                </div>
                <div class="cart__other px-3 mt-1 overflow-x-scroll">
                  <div
                    class="cart__other_cards w-full gap-5 flex justify-between mt-0 mb-0"
                  >
                    <div
                      class="other__card h-full w-[100%] flex gap-5 px-5 py-2 border-[#F7D22D] border-4 my-2 rounded-lg cursor-pointer"
                      v-for="item in data.slice(0, 10)"
                      @click="handleAddCart(item)"
                    >
                      <div
                        class="other__card_header bg-red-500 w-[200px] h-full"
                      >
                        <img
                          :src="`${item.img}`"
                          class="w-full h-full object-cover"
                        />
                      </div>
                      <div class="other__card_body w-[100%]">
                        <p class="text-[13px] w-full">{{ item.title }}...</p>
                        <p class="text-[#FF2E65] mt-5">от {{ item.price }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-else
                class="cart__content w-[300px] h-[50px] bg-white absolute right-0 z-[999] hidden shadow-2xl border-[3px] border-[#F7D22D] rounded-md text-center"
                ref="content"
              >
                <h1 class="text-[32px]">Not Date</h1>
              </div>
            </div>
            <div class="navbar__media p-2" v-if="defaultBoolean">
              <img
                class="bx bx-list-ul relative z-50"
                @click="toggleBlock"
                src="../assets/menu_x.png"
                alt=""
              />
              <nav
                @click="toggleBlock"
                class="media_nav sm:block lg:hidden absolute z-[49] top-0 right-0 w-[100%] h-[520px] bg-[#F7D22D]"
                ref="media_nav"
              >
                <ul
                  class="media_nav_group text-center mt-[4rem] text-[15px] font-bold leading-[2]"
                >
                  <li class="nav__item">
                    <RouterLink to="/categories/pizza">Пицца</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/pasta">Паста</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/soup">Суп</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/salat">Салаты</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/drink">Напитки</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/desert">Десерты</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/bakalea">Бакалея</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/antipasta"
                      >Антипасти</RouterLink
                    >
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/combo">Комбо</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/discount">Акции</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/contact">Контакты</RouterLink>
                  </li>
                  <li class="nav__item text-[#696F7A]">
                    <RouterLink to="/sign">Войти</RouterLink>
                  </li>
                  <li
                    class="nav__item relative"
                    @mouseenter="handleShow"
                    @mouseleave="handleShow"
                  >
                    <RouterLink to="/cart">
                      <button class="py-2 px-3 bg-[white] rounded-md">
                        Корзина | {{ this.cartArray.length }}
                      </button>
                    </RouterLink>
                    <div
                      class="cart__content w-[300px] h-[390px] bg-white absolute right-0 z-[999] hidden shadow-2xl border-[3px] border-[#F7D22D] rounded-lg"
                      ref="content"
                      v-if="this.cartArray.length > 0"
                    >
                      <div
                        class="cart__content_cards px-4 h-[150px] overflow-y-scroll"
                      >
                        <div
                          class="cart__mini_card w-full my-2 p-2 border-b-2 flex justify-between"
                          v-for="item in this.cartArray"
                        >
                          <div class="mini_card_header w-[25%] h-[100%]">
                            <img
                              class="w-[100%] h-[100%]"
                              :src="`${item.img}`"
                              alt=""
                            />
                          </div>
                          <div class="mini_card_body w-[50%]">
                            <h2 class="text-[14px] mb-2">{{ item.title }}</h2>
                            <div
                              class="h-[30px] count__form flex items-center justify-between bg-[#F3F3F7]"
                            >
                              <button
                                @click="count++"
                                class="w-full text-[20px] text-center"
                              >
                                +
                              </button>
                              <div
                                class="count w-[20%] text-center"
                                v-if="count > 0"
                              >
                                {{ count }}
                              </div>
                              <div class="count w-[20%] text-center" v-else>
                                0
                              </div>
                              <button
                                @click="count--"
                                class="w-full text-[20px] text-center"
                              >
                                -
                              </button>
                            </div>
                          </div>
                          <div class="mini_card_footer h-full">
                            <i
                              @click="handleDelete(item.id)"
                              class="cursor-pointer bx bx-x-circle text-[20px] mb-8"
                            ></i>
                            <p>{{ item.price }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="cart__sum px-3 flex items-center mt-1">
                        <h2>Сумма заказа</h2>
                        <span class="text-black text-[40px]">{{
                          cartSum
                        }}</span>
                      </div>
                      <div class="cart__other_title px-3">
                        <h2 class="text-[#FF2E65]">Добавить к заказу?</h2>
                      </div>
                      <div class="cart__other px-3 mt-1 overflow-x-scroll">
                        <div
                          class="cart__other_cards w-full gap-5 flex justify-between mt-7 mb-0"
                        >
                          <div
                            class="other__card h-full w-[100%] flex gap-5 px-5 py-2 border-[#F7D22D] border-4 my-2 rounded-lg cursor-pointer"
                            v-for="item in data.slice(0, 10)"
                            @click="handleAddCart(item)"
                          >
                            <div
                              class="other__card_header bg-red-500 w-[200px] h-full"
                            >
                              <img
                                :src="`${item.img}`"
                                class="w-full h-full object-cover"
                              />
                            </div>
                            <div class="other__card_body w-[100%]">
                              <p class="text-[13px] w-full">
                                {{ item.title }}...
                              </p>
                              <p class="text-[#FF2E65] mt-5">
                                от {{ item.price }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      v-else
                      class="cart__content w-[300px] h-[100px] bg-white absolute right-0 z-[999] hidden shadow-2xl border-[3px] border-[#F7D22D] rounded-md items-center justify-center"
                      ref="content"
                    >
                      <h1 class="text-[32px]">Not Date</h1>
                    </div>
                  </li>
                </ul>
              </nav>
              <nav
                @click="toggleBlock"
                class="media_nav sm:hidden lg:block absolute z-[49] top-[5rem] right-[2%] w-[20%] h-[450px] p-5 bg-[white] rounded-xl shadow-2xl"
                ref="media_nav"
              >
                <ul class="media_nav_group text-[15px] font-bold leading-[2]">
                  <li class="nav__item">
                    <RouterLink to="/categories/pizza">Пицца</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/pasta">Паста</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/soup">Суп</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/salat">Салаты</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/drink">Напитки</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/desert">Десерты</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/bakalea">Бакалея</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/antipasta"
                      >Антипасти</RouterLink
                    >
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/categories/combo">Комбо</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/discount">Акции</RouterLink>
                  </li>
                  <li class="nav__item">
                    <RouterLink to="/contact">Контакты</RouterLink>
                  </li>
                  <li class="nav__item text-[#696F7A]">
                    <RouterLink to="/sign">Войти</RouterLink>
                  </li>
                  <li
                    class="nav__item relative"
                    @mouseenter="handleShow"
                    @mouseleave="handleShow"
                  >
                    <RouterLink to="/cart">
                      <button class="py-2 px-3 bg-[#F7D22D] rounded-md">
                        Корзина | {{ this.cartArray.length }}
                      </button>
                    </RouterLink>
                    <div
                      class="cart__content w-[300px] h-[390px] bg-white absolute right-0 z-[999] hidden shadow-2xl border-[3px] border-[#F7D22D] rounded-lg"
                      ref="content"
                      v-if="this.cartArray.length > 0"
                    >
                      <div
                        class="cart__content_cards px-4 h-[150px] overflow-y-scroll"
                      >
                        <div
                          class="cart__mini_card w-full my-2 p-2 border-b-2 flex justify-between"
                          v-for="item in this.cartArray"
                        >
                          <div class="mini_card_header w-[25%] h-[100%]">
                            <img
                              class="w-[100%] h-[100%]"
                              :src="`${item.img}`"
                              alt=""
                            />
                          </div>
                          <div class="mini_card_body w-[50%]">
                            <h2 class="text-[14px] mb-2">{{ item.title }}</h2>
                            <div
                              class="h-[30px] count__form flex items-center justify-between bg-[#F3F3F7]"
                            >
                              <button
                                @click="count++"
                                class="w-full text-[20px] text-center"
                              >
                                +
                              </button>
                              <div
                                class="count w-[20%] text-center"
                                v-if="count > 0"
                              >
                                {{ count }}
                              </div>
                              <div class="count w-[20%] text-center" v-else>
                                0
                              </div>
                              <button
                                @click="count--"
                                class="w-full text-[20px] text-center"
                              >
                                -
                              </button>
                            </div>
                          </div>
                          <div class="mini_card_footer h-full">
                            <i
                              @click="handleDelete(item.id)"
                              class="cursor-pointer bx bx-x-circle text-[20px] mb-8"
                            ></i>
                            <p>{{ item.price }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="cart__sum px-3 flex items-center mt-1">
                        <h2>Сумма заказа</h2>
                        <span class="text-black text-[40px]">{{
                          cartSum
                        }}</span>
                      </div>
                      <div class="cart__other_title px-3">
                        <h2 class="text-[#FF2E65]">Добавить к заказу?</h2>
                      </div>
                      <div class="cart__other px-3 mt-1 overflow-x-scroll">
                        <div
                          class="cart__other_cards w-full gap-5 flex justify-between mt-7 mb-0"
                        >
                          <div
                            class="other__card h-full w-[100%] flex gap-5 px-5 py-2 border-[#F7D22D] border-4 my-2 rounded-lg cursor-pointer"
                            v-for="item in data.slice(0, 10)"
                            @click="handleAddCart(item)"
                          >
                            <div
                              class="other__card_header bg-red-500 w-[200px] h-full"
                            >
                              <img
                                :src="`${item.img}`"
                                class="w-full h-full object-cover"
                              />
                            </div>
                            <div class="other__card_body w-[100%]">
                              <p class="text-[13px] w-full">
                                {{ item.title }}...
                              </p>
                              <p class="text-[#FF2E65] mt-5">
                                от {{ item.price }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      v-else
                      class="cart__content w-[300px] h-[100px] bg-white absolute right-0 z-[999] hidden shadow-2xl border-[3px] border-[#F7D22D] rounded-md items-center justify-center"
                      ref="content"
                    >
                      <h1 class="text-[32px]">Not Date</h1>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="navbar__media p-2" v-else>
              <img
                @click="toggleBlock"
                src="../assets/menu.png"
                class="bx bx-list-ul text-[38px] relative z-50"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          class="navbar__bottom sm:hidden lg:hidden xl:block mt-4"
          ref="navbarFix"
        >
          <div class="container">
            <nav class="navbar__nav">
              <ul
                class="nav__group flex items-center justify-between text-[1rem] font-[600]"
              >
              <li class="nav__item">
                <RouterLink to="/" class="fixed__logo hidden">
                  <img src="../assets/Logo.png" alt="">
                </RouterLink>
              </li>
                <li class="nav__item">
                  <RouterLink to="/categories/pizza">Пицца</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/categories/pasta">Паста</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/categories/soup">Пицца</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/categories/salat">Салаты</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/categories/drink">Напитки</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/categories/desert">Десерты</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/categories/bakalea">Бакалея</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/categories/antipasta">Антипасти</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/categories/combo">Комбо</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/discount">Акции</RouterLink>
                </li>
                <li class="nav__item">
                  <RouterLink to="/contact">Контакты</RouterLink>
                </li>
                <li class="nav__item text-[#696F7A]">
                  <RouterLink to="/sign">Войти</RouterLink>
                </li>
                <li
                  class="nav__item relative"
                  @mouseenter="handleShow"
                  @mouseleave="handleShow"
                >
                  <RouterLink to="/cart">
                    <button class="py-2 px-3 bg-[#F7D22D] rounded-md">
                      Корзина | {{ this.cartArray.length }}
                    </button>
                  </RouterLink>
                  <div
                    class="cart__content w-[300px] h-[360px] bg-white absolute right-0 z-[999] hidden shadow-2xl border-[3px] border-[#F7D22D] rounded-lg"
                    ref="content"
                    v-if="this.cartArray.length > 0"
                  >
                    <div
                      class="cart__content_cards px-4 h-[150px] overflow-y-scroll"
                    >
                      <div class="cart__mini_card w-full my-2 p-2 border-b-2 flex justify-between"
                        v-for="item in this.cartArray"
                      >
                        <div class="mini_card_header w-[25%] h-[100%]">
                          <img
                            class="w-[100%] h-[100%]"
                            :src="`${item.img}`"
                            alt=""
                          />
                        </div>
                        <div class="mini_card_body w-[50%]">
                          <h2 class="text-[14px] mb-2">{{ item.title }}</h2>
                          <div
                            class="h-[30px] count__form flex items-center justify-between bg-[#F3F3F7]"
                          >
                            <button
                              @click="handleIncrSum(item)"
                              class="w-full text-[20px] text-center"
                            >
                              +
                            </button>
                            <div
                              class="count w-[20%] text-center"
                              v-if="count > 0"
                            >
                              {{ count }}
                            </div>
                            <div class="count w-[20%] text-center" v-else>
                              0
                            </div>
                            <button
                              @click="count--"
                              class="w-full text-[20px] text-center"
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <div class="mini_card_footer h-full">
                          <i
                            @click="handleDelete(item.id)"
                            class="cursor-pointer bx bx-x-circle text-[20px] mb-8"
                          ></i>
                          <p>{{ item.price }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="cart__sum px-3 flex items-center mt-1 gap-4">
                      <h2>Сумма заказа</h2>
                      <span class="text-black text-[1.2rem]">{{
                        cartSum
                      }}</span>
                    </div>
                    <div class="cart__other_title px-3">
                      <h2 class="text-[#FF2E65]">Добавить к заказу?</h2>
                    </div>
                    <div class="cart__other px-3 mt-1 overflow-x-scroll">
                      <div
                        class="cart__other_cards w-full gap-5 flex justify-between mt-7 mb-0 h-auto"
                      >
                        <div
                          class="other__card h-full w-[100%] flex gap-5 px-5 py-2 border-[#F7D22D] border-4 my-2 rounded-lg cursor-pointer"
                          v-for="item in otherData"
                          @click="handleAddCart(item)"
                        >
                          <div
                            class="other__card_header w-[100px] h-full"
                          >
                            <img
                              :src="`${item.img}`"
                              class="w-full h-full object-cover"
                            />
                          </div>
                          <div class="other__card_body w-[100%] h-[60px]">
                            <p class="text-[13px] w-full">
                              {{ item.title }}
                            </p>
                            <p class="text-[#FF2E65]">
                              от {{ item.price }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-else
                    class="cart__content w-[300px] h-[100px] bg-white absolute right-0 z-[999] hidden shadow-2xl border-[3px] border-[#F7D22D] not_data rounded-md items-center justify-center"
                    ref="content"
                  >
                    <h1 class="text-[32px]">Not Date</h1>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      count: 0,
      defaultBoolean: false,
    };
  },
  components: {
    RouterLink,
  },
  props: {
    cartArray: {
      type: Array,
      required: true,
    },
    cartSum: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    otherData: {
      type: Array,
      required: true
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        this.$refs.navbarFix.classList.add("fixed");
        this.$refs.navbar__media_ref.classList.add("custom_fixed");
      } else {
        this.$refs.navbarFix.classList.remove("fixed");
        this.$refs.navbar__media_ref.classList.remove("custom_fixed");
      }
    });
  },
  methods: {
    handleShow(e) {
      if (e.type == "mouseenter") {
        this.$refs.content.classList.remove("hidden");
        this.$refs.content.classList.add("block");
      } else {
        this.$refs.content.classList.remove("block");
        this.$refs.content.classList.add("hidden");
      }
    },
    handleDelete(id) {
      this.$emit("delete", id);
    },
    handleAddCart(item) {
      this.$emit("addCart", item);
    },
    toggleBlock() {
      this.defaultBoolean = !this.defaultBoolean;
      this.$refs.media_nav.classList.toggle("sm:hidden");
    },
    handleIncrSum(item) {
      this.count = this.count + 1;
      this.$emit("summary", [item, this.count]);
    },
  },
};
</script>
<style lang=""></style>
