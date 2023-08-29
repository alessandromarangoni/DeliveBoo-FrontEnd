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
    <div class="container-fluid ps-md-5 ms-md-5">
        <!-- Motto -->
        <div class="row ms-md-5 ps-md-5">
            <div class="col ps-md-5 ms-md-5">
                <h1>Il tuo pasto a portata di un click</h1>
            </div>
        </div>
        <div class="pe-md-5 me-md-5">
            <CategoriesCarousel />
        </div>
        
        <div class="row pe-md-5 me-md-5 mt-5">
            <AppSearchBar />
        </div>
        
        <div class="row ms-md-5 ps-md-5">
            <AppSearch />
        </div>
    </div>
    
</template>

<style scoped lang="scss">

</style>