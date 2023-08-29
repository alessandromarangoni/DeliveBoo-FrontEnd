<script>
import AppMain from '../AppMain.vue';
import CategoriesCarousel from '../main-sections/CategoriesCarousel.vue';
import AppHeader from '../AppHeader.vue';

    export default{ 
        name:'AppHome',
        components: {
            AppHeader,
            AppMain,
            CategoriesCarousel,
        }
    }
        
</script>
<template>
     <div>
        <AppHeader />
        <AppMain />
     </div>
</template>