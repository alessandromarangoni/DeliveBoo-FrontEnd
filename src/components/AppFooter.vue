<script>
    export default {
        name: "AppFooter",
        data() {
            return {
            path:'home'

            }
        }
    }
</script>

<template>
    <div class="custom-footer position-fixed container-fluid m-0 p-0 d-sm-none">
        <div class="row h-100">
            <div class="col d-flex justify-content-around align-items-center">
                <router-link class="text-decoration-none" :to="{name:this.path}">
                    <div class="custom-wrapper d-flex justify-content-center align-items-center">
                        <i class="fa-solid text-white fa-house fs-3 custom-icon"></i>
                    </div>
                </router-link>
                <div class="d-flex justify-content-center align-items-center">
                    <i class="fa-regular fa-user fs-3 custom-icon"></i>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-cart-shopping fs-3 custom-icon"></i>
                </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-magnifying-glass fs-3 custom-icon"></i>
                    </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../variables.scss";

    .custom-footer{
        bottom: 0;
        background:#f8f8f8;
        height: 80px;
        -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.199); 
        box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.219);

        .custom-icon{
            color: #F96A5F;
        }

        .custom-wrapper{
            height: 55px;
            width: 55px;
            border-radius: 50px;
            background-color: #F96A5F;
            -webkit-box-shadow: 2px 19px 11px -3px rgba(249,106,95,0.22); 
            box-shadow: 2px 19px 11px -3px rgba(249,106,95,0.22);
            
        }
    }

</style>