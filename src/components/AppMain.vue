<script>
  import CategoriesCarousel from './main-sections/CategoriesCarousel.vue'

    export default {
        name: "AppMain",

        components: {
            CategoriesCarousel,
            },

        data() {
            return {
            }
        }
    }
</script>

<template>
    <div class="container-fluid ps-5 ">
        <!-- Motto -->
        <div class="row ms-5">
            <div class="col ps-5 ms-5">
                <h1>Il tuo pasto a portata di un click</h1>
                <CategoriesCarousel />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>