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
        <div>
            <section class="text-center">
                <h2>I nostri Ristortanti</h2>
            </section>
            <section>
                <div v-if="this.store.restaurants.length > 0" class="d-flex justify-content-evenly gap-3 flex-wrap">
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