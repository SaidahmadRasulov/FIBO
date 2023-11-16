<template>
  <section class="single_discount_section py-[5rem] sm:mb-[0rem] xl:mb-[5rem]">
    <div class="container">
        <div class="single_discount_content sm:flex-col md:flex-initial sm:gap-[4rem] xl:gap-0 xl:h-full xl:flex-row flex justify-between" v-for="item in filteredData">
            <div class="single_image sm:w-[90%] sm:mx-auto md:mx-0 xl:w-[45%]">
                <img :src="`${item.image}`" class="w-full" alt="Image Alternative">
            </div>
            <div class="single_info sm:w-[90%] sm:mx-auto md:mx-0 xl:w-[45%]">
                <h2 class="text-[2rem] mb-[1rem]">{{ item.title }}</h2>
                <p class="mb-[1rem]">{{ item.description }}</p>
                <p class="mb-[1rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque magnam atque beatae veritatis. Doloribus, molestiae. Maiores, minus in incidunt perferendis optio aspernatur accusantium pariatur odit dolor perspiciatis enim ex fugiat eaque ipsum quo rerum? Expedita repudiandae facilis consequatur asperiores omnis. Animi ea doloremque perspiciatis. Autem, quibusdam. Est amet temporibus nobis?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque magnam atque beatae veritatis. Doloribus, molestiae. Maiores, minus in incidunt perferendis optio aspernatur accusantium pariatur odit dolor perspiciatis enim ex fugiat eaque ipsum quo rerum? Expedita repudiandae facilis consequatur asperiores omnis. Animi ea doloremque perspiciatis. Autem, quibusdam. Est amet temporibus nobis?</p>
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
    data() {
        return {
            id: this.$route.params.id,
        };
    },
    watch: {
        '$route.params.id': function (newId) {
            this.id = newId;
        },
    },
    computed: {
        filteredData() {
            return this.discountData.filter(item => item.id === this.id);
        },
    },
    mounted() {
        console.log(this.id)
    }
};
</script>
<style lang=""></style>
