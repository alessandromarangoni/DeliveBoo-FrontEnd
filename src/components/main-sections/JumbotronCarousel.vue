<script>
    export default {
        name: "JumbotronCarousel",
        data() {
            return {
                slide: [
                    {
                        title:"Consegna a domicilio veloce e affidabile",
                        url:'https://i.postimg.cc/4ySL5CL0/Slide-1.png',
                    },
                    {
                        title:"Esplora il gusto della tua città, consegnato a casa tua",
                        url:'https://i.postimg.cc/905Rk9cV/slide-2.png',
                    },
                    {
                        title:"Scopri i prodotti più venduti in tutta Italia",
                        url:'https://i.postimg.cc/vTtBSSPL/slide3.png',
                    }
                ],

            }
        }
    }
</script>
<template>
    <div class="d-flex justify-content-end pb-5 mb-5 custom-container">
        <div class="jumbo-wrapper mb-5 pb-5 d-flex">
            <v-carousel
            height="100%"
            hide-delimiter-background
            show-arrows="hover"
            class="carousel"
            >
                <v-carousel-item
                v-for="(slide, i) in this.slide"
                :key="i"
                >
                    <v-sheet
                        height="100%"
                    >
                        <div class="position-relative">
                            <img :src="slide.url" alt="" srcset="" class="w-100 object-fit-cover">
                            <span class="position-absolute fw-bolder cards-title text-center"> {{slide.title}} </span>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>
<style lang="scss">

    .cards-title{
        font-size: 4rem;
        color:#fff;
        z-index: 999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .jumbo-wrapper{
        width: calc(100% - 100px);
    }
    @media screen and (max-width: 576px) {
        .jumbo-wrapper{
            width: 100%;
        }
    }

    @media screen and (min-width: 576px) and (max-width:768px){
        // .carousel{
        //     height: 300px!important;
        // }
    }

        @media screen and (min-width: 1000px) {
            .jumbo-wrapper{
                width: calc(100% - 100px);
                justify-content: center !important;
            }
            .carousel{
                max-width: 80%;
            }
            .custom-container{
                justify-content: end !important;
            }
        }

</style>