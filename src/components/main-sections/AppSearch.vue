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
        if (store.selectedCategories.length < 1) {
            services.getAllRestaurants()
        }
    }
}
</script>
<template>
    <div class="d-flex justify-content-end">
        <div class="align-center-on-md p-sm-3">
            <div v-if='this.store.restaurants.length > 0'>
                <div class="d-flex justify-content-evenly gap-4 flex-wrap mt-sm-16">
                    <div v-for="restaurant in store.restaurants" :key="restaurant.id">
                        <div class="card-custom mt-5">
                            <router-link class="text-decoration-none text-black" :to=" { name:this.path, params:{'id':restaurant.id} }">
                                <img :src="'http://127.0.0.1:8000/storage/'+ restaurant.thumb " alt="" v-if="restaurant.thumb" class="card-img-top custom-image rounded-3">
                                <div class="card-body pt-2">
                                    <h5 class="card-title fs-4 text-ellipsis">{{ restaurant.name }}</h5>
                                    <div v-if="restaurant.note">
                                        <span class="card-text d-block text-custom-color text-ellipsis">{{ restaurant.note }}</span>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="this.store.restaurants.length === 0 & !store.loading">
               <div class="text-center pt-5 mt-5 w-100 m-auto set-height">
                    <h2 class="mb-5 p-5">Oops! <br>Nessun ristorante corrisponde alla ricerca..</h2>
                    <div class="d-flex justify-content-center align-item-center ">
                        <span class="loader"></span>
                    </div>
                </div>
            </div>
            <div v-else-if="store.loading ">
               <div class="text-center pt-5 mt-5 w-50 m-auto set-height">
                    <h2 class="mb-5 p-5">Caricamento..</h2>                    
                    <div class="d-flex justify-content-center align-item-center ">
                        <span class="loader"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.loader {
    position: relative;
    width: 120px;
    height: 14px;
    border-radius: 0 0 15px 15px;
    background-color: #3e494d;
    box-shadow: 0 -1px 4px #5d6063 inset;
    animation: panex 0.5s linear alternate infinite;
    transform-origin: 170px 0;
    z-index: 10;
    perspective: 300px;
}
.loader::before {
  content: '';
  position: absolute;
  left: calc( 100% - 2px);
  top: 0;
  z-index: -2;
  height: 10px;
  width: 70px;
  border-radius: 0 4px 4px 0;
  background-repeat: no-repeat;
  background-image: linear-gradient(#6c4924, #4b2d21), linear-gradient(#4d5457 24px, transparent 0), linear-gradient(#9f9e9e 24px, transparent 0);
  background-size: 50px 10px , 4px 8px , 24px 4px;
  background-position: right center , 17px center , 0px center;
}
.loader::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  z-index: -2;
  transform: translate(-50% , -20px) rotate3d(75, -2, 3, 78deg);
  width: 55px;
  height: 53px;
  background: #fff;
  background-image:
  radial-gradient(circle 3px , #fff6 90%, transparent 10%),
  radial-gradient(circle 12px , #ffc400 90%, transparent 10%),
  radial-gradient(circle 12px , #ffae00 100%, transparent 0);
  background-repeat: no-repeat;
  background-position: -4px -6px , -2px -2px , -1px -1px;
  box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
  border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
  animation: eggRst 1s ease-out infinite;
}

@keyframes eggRst {
  0% ,  100%{  transform: translate(-50%, -20px) rotate3d(90, 0, 0, 90deg); opacity: 0; }
  10% , 90% {  transform: translate(-50%, -30px) rotate3d(90, 0, 0, 90deg); opacity: 1; }
  25%  {transform:  translate(-50% , -40px) rotate3d(85, 17, 2, 70deg) }
  75% {transform:  translate(-50% , -40px) rotate3d(75, -3, 2, 70deg) }
  50% {transform:  translate(-55% , -50px) rotate3d(75, -8, 3, 50deg) }
}
@keyframes panex {
  0%{  transform: rotate(-5deg)  }
  100%{  transform: rotate(10deg)  }
}
  
section{
    padding-bottom: 100px;
}
.text-custom-color{
    color: rgba(0, 0, 0, 0.815);
}
.set-height{
    height: 50vh;
}
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
.custom-image{
    height: 100px;
    object-fit: cover;
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

