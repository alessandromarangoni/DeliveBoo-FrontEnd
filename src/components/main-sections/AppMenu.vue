<script>
import { store } from '../../stores/store.js';
import { services } from '../../stores/services';

export default {
    name: "AppMenu",
    data() {
        return {
            store,
            services
        }
    },
    methods: {
        getQuantity(e) {
            let found = store.cart.find((product) => product.id == e.id)
            if (found) {
                return found.quantity
            }
        }
    }
}
</script>

<template>
    <!-- MOBILE VERSION -->
        <div v-if="store.warning" class="mobile-version warning position-relative mb-10 mt-4 text-danger d-flex justify-content-center mx-auto rounded border border-danger bg-danger-subtle px-4 py-3 w-75" role="alert">
            <div class="">Nel carrello sono presenti prodotti di un altro ristorante. Svuota il carrello per ordinare!</div>
            <span @click="store.warning = false" class="position-absolute top-0 end-0 px-1 py-0 btn text-danger"> x </span>
        </div>
        <div class="container-fluid set-bg w-75 p-0 pb-5 border rounded-5 mobile-version pb-13 mb-5">
            <div v-for="(item, index) in store.menu" :key="index"  class="mb-5">
                <div class="m-auto d-flex flex-column align-items-center border-b px-4 pt-5 pb-10 border-black-50 position-relative">
                    <div class="d-flex flex-column align-items-center" v-if="item.is_visible > 0">
                        <template v-if="item.thumb">
                            <img :src="'http://127.0.0.1:8000/storage/' + item.thumb" alt="" srcset="" class=" item-image img-fluid">
                        </template>
                        <template v-else>
                            <img class="item-image img-fluid" src="https://img.freepik.com/free-photo/delicious-cartoon-style-fast-food_23-2150287594.jpg?w=1380&t=st=1693509180~exp=1693509780~hmac=3a372721d6b4a948d3eb9f0329a7f3766fda121437ec298de441a03317c055a0" alt="" srcset="">
                        </template>
                        <div class="ms-5 align-text-on-mobile">
                            <h4>{{item.name}}</h4>
                            <span class="text-black-50 d-block pe-3">{{item.description}}</span>
                            <span class="text-black-50 d-block">{{item.price}} €</span>
                        </div>
                        <div class="d-flex quantity-wrapper">
                            <div v-if="getQuantity(item)" class="custom-imput minus" @click="services.subProduct(item)"><i class="fa-solid fa-minus text-black-50 custom-icon"></i></div>
                            <div class="custom-imput">{{getQuantity(item)}}</div>
                            <div class="custom-imput plus"  @click="services.addProduct(item)"><i class="fa-solid fa-plus text-black-50 custom-icon"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-5 desktop w-75">
            <div v-if="store.warning" class="warning position-relative mb-10 text-danger d-flex justify-content-center mx-auto rounded border border-danger bg-danger-subtle px-4 py-3 w-75"  role="alert">
                <div class="fs-5">Nel carrello sono presenti prodotti di un altro ristorante. <br> Svuota il carrello per ordinare!</div>
                <span @click="store.warning = false" class="position-absolute top-0 end-0 px-1 py-0 btn text-danger">
                    <i class="fa-solid fa-x"></i>
                </span>
            </div>
            <div class="d-flex ms-5 ps-5 justify-content-evenly gap-3 flex-wrap">
                <div v-for="(item, index) in store.menu" :key="index">
                    <div class="card-custom p-3 position-relative">
                        <template v-if="item.thumb">
                            <img :src="'http://127.0.0.1:8000/storage/' + item.thumb" alt="" srcset="" class=" item-image img-fluid">
                        </template>
                        <template v-else>
                            <img class="item-image img-fluid" src="https://img.freepik.com/free-photo/delicious-cartoon-style-fast-food_23-2150287594.jpg?w=1380&t=st=1693509180~exp=1693509780~hmac=3a372721d6b4a948d3eb9f0329a7f3766fda121437ec298de441a03317c055a0" alt="" srcset="">
                        </template>
                        <div class="d-flex p-2">
                            <div class="pt-2">
                                <h4>{{ item.name }}</h4>
                                <span class="text-black-50 text-ellipsis d-block pt-2 pe-3">{{ item.description }}</span>
                                <span class="text-black-50 d-block pt-2 ">{{ item.price }} €</span>
                            </div>
                            <div class="d-flex align-self-end quantity-wrapper">
                                <div v-if="getQuantity(item)" class="custom-imput minus" @click="services.subProduct(item)">
                                    <i class="fa-solid fa-minus text-black-50 custom-icon"></i> 
                                </div>
                                <div class="custom-imput">{{ getQuantity(item) }}</div>
                                <div class="custom-imput plus" @click=" services.addProduct(item)"><i class="fa-solid fa-plus text-black-50 custom-icon"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<style scoped lang="scss">
.warning {
    width: fit-content;
}
.align-text-on-mobile{
    text-align: center;
}
.card-custom {
    min-width: 300px;
    min-height: 250px;
    border-radius: 15px !important;
    background: #ececec;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
.text-ellipsis {
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-image {
    width: 100px;
    border-radius: 20px;
}
.quantity-wrapper {
    position: absolute;
    bottom: 5%;
    right: 5%;
}
.custom-imput {
    height: 27px;
    width: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 12px;
}
.custom-icon {
    transform: translate(5%, 5%);
}
.plus {
    border: 3px solid rgba(78, 223, 78, 0.842);
    &:hover{
        cursor: pointer;
        scale: 1.1;
    }
    &:active{
        scale: 1.0;
    }
}
.minus {
    border: 3px solid rgba(223, 107, 78, 0.863);
    &:hover{
        cursor: pointer;
        scale: 1.1;
    }
    &:active{
        scale: 1.0;
    }
}
@media screen and (min-width: 577px) {
    .mobile-version {
        display: none!important;
    }
}
@media screen and (max-width: 577px) {
.desktop{
    display: none;
}
}
</style>