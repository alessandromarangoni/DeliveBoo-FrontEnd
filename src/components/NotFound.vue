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
    <section>
        <div class="container-fluid d-flex flex-column flex-sm-row align-items-center justify-content-center padding">
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
    <div class="AnotherFooter">
        <AnotherFooter />
    </div>
    <AppFooter />
</template>

<style scoped lang="scss">
img{
    height: 220px;
    width: 300px;
}

.AnotherFooter{
    width: calc(100% - 100px );
    background-color: #f96a5f;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
}
.padding{
    padding-left: 100px;
}

@media screen and (max-width: 575px) {
    .padding{
        padding-left: 0;
    }
    .AnotherFooter{
        width: 100%;
        bottom: 80px;
    }
}
</style>
