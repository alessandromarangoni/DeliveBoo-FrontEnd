<script>
import {store} from '../../stores/store'
import { services } from '../../stores/services'


export default {
    data(){
        return{
            store,
            services,
            path:'AppRestaurant'
        }
    },
    methods:{
    },
    mounted(){
        services.getAllRestaurants()
    }
}
</script>
<template>
    <div class="d-flex justify-content-end classe-da-eliminare">
        <div class="align-center-on-md p-sm-3">
            <section>
                <div v-if='this.store.restaurants.length > 0'>
                    <div class="text-center pb-5 mp-5">
                            <h2>Risultati</h2>
                    </div>
                    <div class="d-flex justify-content-evenly gap-3 flex-wrap">
                        <div v-for="restaurant in store.restaurants" :key="restaurant.id">
                            <div class="card-custom">
                                <router-link class="text-decoration-none text-black" :to=" { name:this.path, params:{'id':restaurant.id} }">
                                    <img :src="'http://127.0.0.1:8000/restaurants/'+ restaurant.thumb " alt="" v-if="restaurant.thumb" class="card-img-top rounded-3">
                                    <div class="card-body pt-2">
                                        <h5 class="card-title fs-4">{{ restaurant.name }}</h5>
                                        <div v-if="restaurant.note">
                                            <span class="card-text d-block text-ellipsis">{{ restaurant.note }}</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="this.store.restaurants.length === 0 & !store.loading">
                   <div class="text-center pt-5 mt-5 w-50 m-auto">
                            <h2>Oops! Ancora Nessun ristorante Che corrisponde a questa Ricerca</h2>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss">

    // .classe-da-eliminare {
    //     height: 500vh;
    // }

    .text-ellipsis{
        overflow: hidden; 
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .card-custom{
        width: 300px;
        border-radius: 15px !important;
        background: rgba(255, 216, 184, 0);
        border: none;
    }

    .align-center-on-md{
            width: calc(100% - 100px);
        }

    @media screen and (max-width: 577px){
        .align-center-on-md{
            width:100%;
        }
    }
</style>

