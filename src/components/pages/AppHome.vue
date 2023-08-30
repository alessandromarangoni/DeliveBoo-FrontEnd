<script>
import AppMain from '../AppMain.vue';
import JumbotronCarousel from '../main-sections/JumbotronCarousel.vue'
import CategoriesCarousel from '../main-sections/CategoriesCarousel.vue';
import AppHeader from '../AppHeader.vue';

    export default{ 
        name:'AppHome',
        components: {
            AppHeader,
            JumbotronCarousel,
            AppMain,
            CategoriesCarousel,
        }
    }
        
</script>
<template>
    <div>
        <JumbotronCarousel/>
        <AppHeader />
        <AppMain />
    </div>
</template>