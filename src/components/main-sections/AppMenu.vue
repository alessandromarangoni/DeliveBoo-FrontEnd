<script>
import { store } from '../../stores/store.js';
import axios from 'axios';

    export default {
        name: "AppMenu",

        components: {
            },

        data() {
            return {
                store
            }
        },
        methods:{
            axios
        }
    }
</script>

<template>
    <div class="container-fluid w-75 p-0 pb-5 border rounded-5">
       <div v-for="(item, index) in store.menu" :key="index" >
        <div class="d-flex flex-column align-content-center border-b px-4 py-5 border-black-50">
            <div class="d-flex align-items-center">
                 <template v-if="item.thumb">
                    <img :src="item.thumb" alt="" srcset="" class=" item-image img-fluid">
                 </template>
                 <template v-else>
                    <img class="item-image img-fluid" src="https://img.freepik.com/free-photo/delicious-cartoon-style-fast-food_23-2150287594.jpg?w=1380&t=st=1693509180~exp=1693509780~hmac=3a372721d6b4a948d3eb9f0329a7f3766fda121437ec298de441a03317c055a0" alt="" srcset="">
                 </template>
                <div class="ms-5">
                    <h4>{{item.name}}</h4>
                    <span class="text-black-50">{{item.description}}</span>
                    <span class="text-black-50 d-block">{{item.price}} €</span>
                </div>
            </div>
        </div>
       </div>
    </div>
    
</template>

<style scoped lang="scss">
.item-image{
   width: 100px;
    border-radius: 20px;
}


</style>