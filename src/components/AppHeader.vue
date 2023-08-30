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
    <!-- <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-6 col-md-4 col-lg-3 p-3">
                <img src="../assets/logo_deliveboo.png" class="img-fluid mx-auto d-block" alt="Logo">
            </div>
        </div>
    </div> -->

    <div class="w-100 position-relative m-0 custom-jumbotron d-flex justify-content-end align-items-center">
        <div class="w-25 pe-5 me-5 text-white fw-bolder"><h1>BOO..on Appetito</h1></div>
        <img src="../assets/logo_deliveboo.png" alt="" class="w-25 position-absolute img-custom" >
    </div>
</template>

<style scoped lang="scss">
    @import '../variables.scss';



    .custom-jumbotron{
        height: 33.3vh;
        background-image: url('https://i.postimg.cc/qqsfg5DC/slideorange.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: -350px;
        background-position-x: 100px;
    }

    .img-custom{
        top:10px;
        left:50%;
        transform:translateX(-50%)
    }
    @media screen and (max-width: 414px) {
        .custom-jumbotron {
            height: 18vh;
            background-position-y: -90px;
            background-position-x: 0px;
        }
    }

    @media screen and (min-width: 416px) and (max-width: 575px) {
        .custom-jumbotron {
            height: 30vh;
            background-position-y: -120px;
            background-position-x: 0px;
        }
    }

    @media screen and (min-width: 575px) and (max-width: 1180px) {
        .custom-jumbotron {
            height: 33vh;
            background-position-y: -180px;
            background-position-x: 100px;
        }
    }

    @media screen and (min-width: 980px) and (max-width: 1200px) {
        .custom-jumbotron {
            height: 33vh;
            background-position-y: -250px;
            background-position-x: 100px;
        }
    }



    @media screen and (min-width: 1200px) and (max-width: 1420px) {
        .custom-jumbotron {
            font-size: 7rem;
            height: 55vh;
            background-position-y: -240px;;
            background-position-x: 100px;
        }
    }

    @media screen and (min-width: 1420px)  {
        .custom-jumbotron {
            font-size: 7rem;
            height: 65vh;
            background-position-y: -465px;;
            background-position-x: 100px;
        }
    }
</style>