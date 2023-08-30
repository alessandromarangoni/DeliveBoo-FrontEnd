<script>
import AppSearch from '../main-sections/AppSearch.vue';
import JumbotronCarousel from '../main-sections/JumbotronCarousel.vue'
import CategoriesCarousel from '../main-sections/CategoriesCarousel.vue';
import AppHeader from '../AppHeader.vue';

    export default{ 
        name:'AppHome',
        components: {
            AppHeader,
            JumbotronCarousel,
            AppSearch,
            CategoriesCarousel,
        }
    }
        
</script>
<template>
    <div>
        <AppHeader />
        <div class="">
            <CategoriesCarousel />
        </div>

        <div class="w-75 m-auto">
            <AppSearch />
        </div> 
        <!-- <JumbotronCarousel/> -->
    </div>
</template>