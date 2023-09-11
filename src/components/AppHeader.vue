<script>
    export default {
        name: "AppHeader",
        data() {
            return {
            }
        }
    }
</script>

<template>
    <!-- giusta -->
    <div class="w-100 position-relative m-0 custom-jumbotron d-flex justify-content-end align-items-center">
        <div class="w-25 pe-5 me-5 text-white fw-bolder"><h1>BOO..on Appetito</h1></div>
        <img src="../assets/logo-light.svg" alt="" class="w-25 position-absolute img-custom" >
    </div>
</template>

<style scoped lang="scss">
    @import '../variables.scss';
    .custom-jumbotron{
        background-image: url('../assets/slide3.png');
        background-repeat: no-repeat;
        background-size: auto 100% ;
        background-position-x: 100px;
        height: 45vh;
        background-color: #90d4ce;
        z-index: -1;
    }
h1{
    font-family: 'Lobster', cursive;
}
    .img-custom{
        top:10px;
        left:50%;
        transform:translateX(-50%);
        max-height: 450px;
        min-width: 150px;
    }
    @media screen and (max-width: 414px) {
        .custom-jumbotron {
            height: 30vh;
            background-position-x: 0px;
            margin-bottom: 15px;
        }
    }
    @media screen and (min-width: 416px) and (max-width: 575px) {
        .custom-jumbotron {
            height: 30vh;
            background-position-x: 0px;
            margin-bottom: 15px;
        }
    }
</style>