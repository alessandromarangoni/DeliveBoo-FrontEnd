<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import AnotherFooter from './main-sections/AnotherFooter.vue';

export default {
    name: "NotFound",
    components:{
        AppHeader,
        AppFooter,
        AnotherFooter
    },
    data() {
            return {
            path:'home'
            }
        }
}
</script>

<template>
    <AppHeader />
    <svg class="wave-1hkxOo headerWave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-haxJK1 animationPaused-2hZ4IO" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor" ></path></svg> 

    <section class="overflow-y-auto">
        <div class="h-100 container-fluid d-flex flex-column flex-sm-row align-items-center justify-content-center padding">
            <img class="p-3 container-fluid marginBottomNegative m-0" src="../assets/deliveboo404logo.png" alt="Logo404">
            <div class="p-3 d-flex flex-column align-items-start justify-content-center">
                <h2 class="text-3xl">ERRORE: {{ $route.params.code }}</h2>
                <h4>Qualcosa è andato storto...</h4>
                <router-link class="text-decoration-none" :to="{name:this.path}">
                    <p>Torna alla home.</p>
                </router-link>
            </div>
        </div>
    </section>
    <AppFooter />
</template>

<style scoped lang="scss">

.headerWave{
    margin-top: -3px;
    color:white ;
    background-color:  #90d4ce;
}
section{
    height: calc(100vh  - 45vh);
}


img{
    height: 220px;
    width: 300px;
}

.padding{
    padding-left: 100px;
}

@media screen and (max-width: 575px) {
    section{
    height: calc(100vh  - 30vh);
}
    .padding{
        padding-left: 0;
    }
}
</style>
