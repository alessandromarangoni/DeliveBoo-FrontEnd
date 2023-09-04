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
            <svg class="wave-1hkxOo headerWave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-haxJK1 animationPaused-2hZ4IO" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor" ></path></svg> 

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

        <svg class="wave-1hkxOo footerWave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-haxJK1 animationPaused-2hZ4IO" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor" ></path></svg> 
        <footer>
            <AnotherFooter />
        </footer>
        
    </div>
</template>

<style scoped lang="scss">
.headerWave{
    margin-top: -3px;
    color:white ;
    background-color:  #90d4ce;
}


.footerWave{
    z-index: -2;
    color: #f96a5f;
    position: absolute;
    bottom: 50px;
    
}


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
@media screen and (max-width: 959px) {
    .footerWave{
        bottom: 95px;
    }
}

@media screen and (max-width: 575px) {
    .paddingBottom{
        padding-bottom: 180px;
    }
    .footerWave{
        bottom: 180px;
    }

    footer{
        width: 100%;
        bottom: 80px;
    }
}
</style>
