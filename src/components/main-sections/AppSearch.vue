<script>
import {store} from '../../stores/store'
import axios from 'axios'

export default {
    data(){
        return{
            store,
        }
    },
    mounted(){
        axios.get(this.store.urlApiRestaurant).then(r => {
            this.store.restaurants = r.data.data
        })
    }
}
</script>
<template>
    <div>
        <div class="col ps-md-5 ms-md-5">
            <section>
                <h2>Risultati</h2>
            </section>
            <section class="">
               <div v-if="this.store.restaurants.length > 0" class="d-flex justify-content-center gap-3 flex-wrap">
                    <div v-for="restaurant in this.store.restaurants">
                        <div class="card" style="width: 18rem;">
                            <img :src="restaurant.thumb" v-if="restaurant.thumb" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">{{ restaurant.name }}</h5>
                                <div v-if="restaurant.note == true">
                                    <p class="card-text">{{ restaurant.note }}</p>
                                </div>
                                <a href="#" class="btn btn-primary">Guarda i nostri piatti</a>
                            </div>
                        </div>
                    </div>
               </div>
               <div v-else>
                    ciao
               </div>
            </section>
        </div>
    </div>
</template>

<style>
</style>