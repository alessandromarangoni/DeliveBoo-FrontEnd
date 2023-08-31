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
    <div class="position-relative">

        <header>

            <AppHeader />
            
        </header>

        
        <main class="paddingBottom">

            <div class="">
                
                <CategoriesCarousel />
                
                <AppSearchBar />
                
            </div>
            
            <div class="w-75 m-auto">
                <AppSearch />
            </div> 

            <!-- <JumbotronCarousel/> -->

        </main>
        
        
        <footer>
        
            <AnotherFooter />
        
        </footer>
        
    </div>
</template>

<style scoped lang="scss">
footer{
    width: calc(100% - 100px );
    background-color: #f96a5f;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
}
.paddingBottom{
    padding-bottom: 120px;
}

@media screen and (max-width: 575px) {
    .paddingBottom{
        padding-bottom: 180px;
    }

    footer{
        width: 100%;
        bottom: 80px;
    }
}
</style>
