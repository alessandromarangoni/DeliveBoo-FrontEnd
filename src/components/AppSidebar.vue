<script>
import OffCanvas from './main-sections/OffCanvas.vue'

    export default {
        name: "AppSidebar",
        components:{
             OffCanvas,
        },
        data() {
            return{
            path:'home'
            }
        }
    }
</script>

<template>
    <div class="custom-sidebar position-fixed align-items-center justify-content-center vh-100 m-0 p-0">
        <div class="row h-100 w-100">
            <div class="col my-col flex-sm-column d-flex justify-content-evenly align-items-center py-sm-16 my-sm-16">
                <div id="user" class="d-flex justify-content-center align-items-center">
                    <i class="fa-regular fa-user fs-3 custom-icon"></i>
                </div>
                <router-link class="text-decoration-none" :to="{name:this.path}">
                    <div class="custom-wrapper d-flex justify-content-center align-items-center">
                        <i id="home" class="fa-solid text-white fa-house fs-3 custom-icon"></i>
                    </div>
                </router-link>
                <div id="cart" class="d-flex justify-content-center align-items-center">
                    <OffCanvas />
                </div>
                <div id="search" class="d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-magnifying-glass fs-3 custom-icon"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../variables.scss";

    .custom-sidebar{
        display:flex;
        left: 0;
        width: 100px;
        z-index: 99;
        // background:$light-orange;
        // -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.199); 
        // box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.219);

        background:#f8f8f8;
        -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.199); 
        box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.219);

        .custom-icon{
            // color: #ffffffd3;

            color: #F96A5F;
        }
        .custom-wrapper{
            height: 55px;
            width: 55px;
            border-radius: 50px;
            
            // background-color: #F96A5F;
            // -webkit-box-shadow: 2px 19px 11px -3px rgba(249,106,95,0.22); 
            // box-shadow: 2px 19px 11px -3px rgba(249,106,95,0.22);

            background-color: #F96A5F;
            -webkit-box-shadow: 2px 19px 11px -3px rgba(249,106,95,0.22); 
            box-shadow: 2px 19px 11px -3px rgba(249,106,95,0.22);
            
        }
    }

    @media screen and (max-width: 576px) {
        .custom-sidebar {
            position: fixed !important;
            left: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 80px !important;
        }

        .my-col{
            width: 100%;
            justify-content: space-evenly;
        }
    }


</style>