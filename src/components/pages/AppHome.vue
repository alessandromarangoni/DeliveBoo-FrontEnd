<script>
import AppSearch from '../main-sections/AppSearch.vue';
import JumbotronCarousel from '../main-sections/JumbotronCarousel.vue'
import CategoriesCarousel from '../main-sections/CategoriesCarousel.vue';
import AppSearchBar from '../main-sections/AppSearchBar.vue';
import AnotherFooter from '../main-sections/AnotherFooter.vue';
import AppHeader from '../AppHeader.vue';

    export default{ 
        name:'AppHome',
        components: {
            AppHeader,
            JumbotronCarousel,
            AppSearch,
            CategoriesCarousel,
            AppSearchBar,
            AnotherFooter,
        }
    }
        
</script>
<template>
    <div>
        <AppHeader />
        <div class="">

            <CategoriesCarousel />

            <AppSearchBar />

        </div>

        <div class="w-75 m-auto">
            <AppSearch />
        </div> 
        <!-- <JumbotronCarousel/> -->
        <footer>
            <AnotherFooter />

        </footer>
    </div>
</template>