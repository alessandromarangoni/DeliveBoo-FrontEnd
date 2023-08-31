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
    methods: {
        getAllRestaurants() {
            axios.get(this.store.urlApiRestaurant).then(r => {
                this.store.restaurants = r.data.data
                this.store.restaurantsAll = r.data.data
                store.loading = false
            })
        },
        getCategories() {
            axios.get(this.store.urlApiCategories)
                .then(r => {
                    store.categories = (r.data.data)

                    store.categories.forEach(element => {
                        store.CategoriesName.push(element.name)
                    });
                    console.log(store.categories)
                })
                .catch(e => console.log(e))
        },

        getDataByCategories() {
            console.log('parte la query', store.selectedCategories);
            if (store.selectedCategories.length > 0) {
                axios.get('http://127.0.0.1:8000/api/restaurants/by-categories/', {
                    params: {
                        category_ids: store.selectedCategories.map(category => category.id)
                    }
                })
                    .then(response => {
                        store.restaurants = response.data
                        console.log("Ristoranti trovati", store.restaurants);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                this.getAllRestaurants()
                // store.restaurants = store.restaurantsAll
                console.log('tutti i ristoranti', store.restaurantsAll);
                console.log('store.restaurants', store.restaurants);
            }
        },

        selectCategory(item) {
            if (store.selectedCategories.includes(item)) {
                const indexid = store.selectedCategories.indexOf(item);
                store.selectedCategories.splice(indexid, 1);
            }
            else {
                store.selectedCategories.push(item)
            };
            console.log("Categorie selezionate:", store.selectedCategories)
            this.getDataByCategories()
        }
    },
    mounted() {
        this.getCategories()
    }
}
</script>

<template>
    <div class="d-flex gx-3 justify-content-end pt-5 mt-5">
        <div class="align-center-on-md">
            <v-sheet class="mx-auto carousel-container w-75">
                <v-slide-group v-model="store.categories" class="pa-4" selected-class="bg-primary" multiple show-arrows>
                    <v-slide-group-item v-for="(item, index) in this.store.categories" :key="index"
                        v-slot="{ isSelected, toggle, selectedClass }">
                        <v-card color="" :class="[store.selectedCategories.includes(item) && 'active-category']"
                            class="carousel-cards mx-5" @click="toggle, selectCategory(item)">
                            <div class="d-flex fill-height align-center justify-center">
                                <v-scale-transition>
                                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                    </v-icon>
                                </v-scale-transition>
                                <div class="text-white fw-bolder fs-4 text-custom position-relative">
                                    <img :src="'http://127.0.0.1:8000/categories/' + item.thumb" alt=""
                                        class="w-100 carousel-img">
                                    <span class="position-absolute slider-cards-title">{{ item.name }}</span>
                                </div>
                            </div>
                        </v-card>
                    </v-slide-group-item>
                </v-slide-group>
            </v-sheet>
        </div>
    </div>

    <div class="text-center d-flex justify-content-center">
        <div v-show="store.selectedCategories.length > 0">
            <span class="d-block pt-3 fw-bolder text-center text-black-50 pe-2">Categorie Selezionate: </span>
        </div>
        <template v-for="(item, index) in store.selectedCategories" :key="index">
            <span class="badge rounded-pill text-white text-bg-warning mt-4 me-2"> {{ ' ' + item.name }}</span>
        </template>
    </div>
</template>
<style scoped lang="scss">
@import "/src/variables.scss";

.active-category {
    border: 2px solid orange;
    box-shadow: 0 0 2px 1px orange;

    img {
        filter: blur(1px);
    }
}

.slider-cards-title {
    top: 50%;
    left: 50%;
    z-index: 999;
    -webkit-text-stroke: #000000;
    -webkit-text-stroke-width: 1px;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
}

.carousel-cards {
    background-color: $light-orange;
    width: 150px;
    height: 75px;
}

.carousel-container {
    border-radius: 50px !important;
    background: rgba(255, 225, 201, 0.384);
    height: 110px;
    border: none;
    backdrop-filter: blur(15px);
    box-shadow: 0px 10px 20px rgba(112, 112, 112, 0.1);
    -webkit-box-shadow: inset 0px 1px 15px 5px #ffffff;
    box-shadow: inset 0px 1px 25px 5px #ffffff73;
}

@media screen and (max-width: 786px) {
   
   #CategoriesCarousel{
    display: none !important;
   }
   
   
   
    // .carousel-cards{
    //     width: 100px;
    //     height: 50px;
    // }
    // .carousel-container{
    //     height: auto;
    // }
    // .text-custom{
    //     font-size: 1rem !important;
    // }
}

// @media screen and (min-width:576px) and (max-width:768px){

//     .carousel-container{
//         max-width: 50% !important;
//         height: auto;
//     }
//     .carousel-cards{
//         width: 100px;
//         height: 50px;
//     }
// }

//     .align-center-on-md{
//             width: calc(100% - 100px);
//         }

//     @media screen and (max-width: 577px){
//         .align-center-on-md{
//             width:100%;
//         }
//     }

</style>