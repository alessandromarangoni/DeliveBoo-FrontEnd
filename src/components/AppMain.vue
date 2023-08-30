<script>
import AppSearch from './main-sections/AppSearch.vue'
import AppSearchBar from './main-sections/AppSearchBar.vue'
import CategoriesCarousel from './main-sections/CategoriesCarousel.vue'

    export default {
        name: "AppMain",

        components: {
            AppSearch,
            CategoriesCarousel,
            AppSearchBar
            },

        data() {
            return {
            }
        }
    }
</script>

<template>
    <div class="container-fluid sidebar_spacer ">
        <!-- Motto -->
        <div class="row p_1rem">
            <div class="col text-center">
                <h1>Il tuo pasto a portata di un click</h1>
            </div>
        </div>
        <div class="">
            <CategoriesCarousel />
        </div>
        
        <div class="pt-5">
            <AppSearchBar />
        </div>
        
        <div class="p_1rem">
            <AppSearch />
        </div>
    </div>
    
</template>

<style scoped lang="scss">
    @media screen and (min-width: 576px) {
        .sidebar_spacer {
            padding-left: 100px;
        }
    }
    .p_1rem {
        padding: 0 1rem;
    }
</style>