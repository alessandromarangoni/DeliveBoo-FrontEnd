<script>
    import { store } from '../../stores/store.js';
    import '@mdi/font/css/materialdesignicons.css';
    import axios from 'axios';

    export default {
        name: "CategoriesCarousel",
        data() {
            return {
                store,
            }
        },
        methods:{
            getCategories(){
                axios.get(this.store.urlApiCategories)
                .then(r => {
                    store.categories=(r.data.data)

                    store.categories.forEach(element => {
                        store.CategoriesName.push(element.name)
                    });
                    console.log(store.categories)
                })
                .catch(e => console.log(e))
            },

            getRestaurantByCategory(id){
                axios.get(this.store.urlApiFilterByCategory + id).then(r => {
                    store.restaurants=(r.data.data)
                    console.log(store.restaurants)
                })
            },
        },
        mounted(){
            this.getCategories()
        }
    }
</script>

<template>
    <div class="d-flex gx-3 justify-content-center">
                    <v-sheet
                        class="mx-auto carousel-container w-75"
                        
                    >
                        <v-slide-group
                            class="pa-4"
                            selected-class="bg-primary"
                            multiple
                            show-arrows
                        >
                        <v-slide-group-item
                                v-for="(item, index) in this.store.categories"
                                v-slot="{ isSelected, toggle, selectedClass }"
                            >
                                <v-card
                                    color=""
                                    :class="['me-5', selectedClass]"
                                    class="carousel-cards"
                                    @click ="this.getRestaurantByCategory(item.id)"
                                >
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>

                                            <v-icon
                                                v-if="isSelected"
                                                color="white"
                                                size="48"
                                                icon="mdi-close-circle-outline"
                                            >
                                            </v-icon>
                                        </v-scale-transition>
                                        <div>
                                        </div>
                                        <span class="text-white fw-bolder fs-4 text-custom">
                                            {{item.name}}
                                        </span>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </div>
</template>

<style scoped lang="scss">
@import "/src/variables.scss";

.carousel-cards{
    background-color:$light-orange;
    width: 150px;
    height: 75px;
}

.carousel-container{
    border-radius: 50px !important;
    background: rgba(255, 225, 201, 0.384);
    height:110px;
    border: none;
    backdrop-filter: blur(15px);
    box-shadow: 0px 10px 20px rgba(112, 112, 112, 0.1);
    -webkit-box-shadow: inset 0px 1px 15px 5px #ffffff; 
    box-shadow: inset 0px 1px 25px 5px #ffffff73;
}

@media screen and (max-width: 576px) {
    .carousel-cards{
        width: 100px;
        height: 50px;
    }
    .carousel-container{
        height: auto;
    }
    .text-custom{
        font-size: 1rem !important;
    }
}

@media screen and (min-width:576px) and (max-width:768px){

    .carousel-container{
        max-width: 50% !important;
        height: auto;
    }
    .carousel-cards{
        width: 100px;
        height: 50px;
    }
}

</style>