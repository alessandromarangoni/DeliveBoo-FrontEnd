<script>
import AppMenu from '../main-sections/AppMenu.vue'
import Cart from '../main-sections/Cart.vue'
import { store } from '../../stores/store.js';
import axios from 'axios';

    export default{ 
        name:'AppRestaurant',
        components: {
            AppMenu,
            Cart,
        },
        data() {
            return {
                store,
                loading:true,
                initialsString:''
            }
        },
        methods: {
            getMenu(){
                axios.get('http://127.0.0.1:8000/api/menu/' + this.$route.params.id)
                .then(response => {
                  this.loading=false,
                  store.selectedRestaurant = response.data.results.restaurant
                  store.menu = response.data.results.products
                })
                .catch((error) => {
                  this.loading = false;
                  this.loadingError = error.message;
                  this.$router.push({ name: "error", params: { code: '404' } })
                });
              },
              initials(string) {
                const words = string.split(' ');
                return this.initialsString = words.map(word => word[0]).join('');
              }
            },
  // MOUNTED PER CAMBIO ROTTA
  beforeRouteUpdate(to, from, next) {
    this.getMenu();
    next();
    setTimeout(() => {
      this.initials(store.selectedRestaurant.name);
    }, 1000);
  },
  // RELOAD DELLA PAGE
  created() {
    this.getMenu();
    setTimeout(() => {
      this.initials(store.selectedRestaurant.name);
    }, 1000);
  },
}     
</script>
<template>
  <div class="custom-container">
        <div class="w-100 text-center" v-if="this.loading===false">
            <img :src="'http://127.0.0.1:8000/storage/'+ store.selectedRestaurant.thumb" alt="" class="w-100 custom-image">
            <div class="d-flex flex-column align-items-center justify-content-between card glass w-50 m-auto icon-restaurant-wrapper ">
                <div class="wrapper noselect icon-restaurant">
                    <div class="canvas">
                        <div class="tracker tr-1"></div>
                        <div class="tracker tr-2"></div>
                        <div class="tracker tr-3"></div>
                        <div class="tracker tr-4"></div>
                        <div class="tracker tr-5"></div>
                        <div class="tracker tr-6"></div>
                        <div class="tracker tr-7"></div>
                        <div class="tracker tr-8"></div>
                        <div class="tracker tr-9"></div>
                        <div class="tracker tr-10"></div>
                        <div class="tracker tr-11"></div>
                        <div class="tracker tr-12"></div>
                        <div class="tracker tr-13"></div>
                        <div class="tracker tr-14"></div>
                        <div class="tracker tr-15"></div>
                        <div class="tracker tr-16"></div>
                        <div class="tracker tr-17"></div>
                        <div class="tracker tr-18"></div>
                        <div class="tracker tr-19"></div>
                        <div class="tracker tr-20"></div>
                        <div class="tracker tr-21"></div>
                        <div class="tracker tr-22"></div>
                        <div class="tracker tr-23"></div>
                        <div class="tracker tr-24"></div>
                        <div class="tracker tr-25"></div>
                        <div id="card">
                          <div class="title">{{this.initialsString}}</div>
                        </div>
                      </div>
                    </div>
                    <h1 class=" fix-margin-from-prev-element py-lg-2">
                      {{store.selectedRestaurant.name}}
                    </h1>
                    <span class="pt-1 pb-lg-2">
                      {{store.selectedRestaurant.street_name}} {{store.selectedRestaurant.street_number}}, {{store.selectedRestaurant.zip_code}}
                    </span>
                    <div class="w-100 border-top text-black-50 border-1 mt-2 py-2 px-4 py-lg-2">
                      note: {{store.selectedRestaurant.note}}
                    </div>
                  </div>
                </div>
                <div class="d-md-flex justify-content-md-end align-items-md-center">
                  <div class="d-flex justify-content-center cart-menu-wrapper align-items-md-center w-100">
                    <div v-if="!this.loading">
                      <AppMenu />
                    </div>
                    <div v-else-if="this.loading ">
                      <div class="text-center pt-5 mt-5 w-50 m-auto set-height h-100vh d-flex justify-content-center align-items-center ">
                        <span class="loader"></span>
                      </div>
                    </div>
                    <div class="cart-container position-relative me-5 p-3">
                      <div v-if="!this.loading">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
    </div>
</template>

<style scoped lang="css">
.h-100vh{
  height: 100vh;
}
.cart-menu-wrapper{
    width: calc(100% - 100px)
}
.glass {
  background: rgba(255, 255, 255, 0.836);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(212, 129, 129, 0.37);
}
.cart-container{
  position: sticky!important;
  right:0;
  bottom:300px
}
.custom-container{
  width:calc(100% - 100px);
  background: #fce5dd4f;
}
.icon-restaurant {
  transform: translateY(-50%);
}
.icon-restaurant-wrapper {
  transform: translateY(-30%);
  border-radius: 30px;
}
.fix-margin-from-prev-element {
  margin-top: -70px;
}
.wrapper {
  position: relative;
  width: 150px;
  height: 150px;
  transition: 200ms;
}
.custom-image{
  height:350px;
  object-fit: cover;
}
.wrapper:active {
  width: 150px;
  height: 150px;
}
#card {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: 700ms;
  background: #F96A5F;
}
.title {
  opacity: 1;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transition-delay: 100ms;
  position: absolute;
  font-size: x-large;
  font-weight: bold;
  color: white;
}
.tracker:hover~#card .title {
  opacity: 1;
}
#prompt {
  bottom: 8px;
  left: 12px;
  z-index: 20;
  font-size: 20px;
  font-weight: bold;
  transition: 300ms ease-in-out-out;
  position: absolute;
  max-width: 110px;
  color: rgb(255, 255, 255);
}
.tracker {
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
}
.tracker:hover {
  cursor: pointer;
}
.tracker:hover~#card #prompt {
  opacity: 0;
}
.tracker:hover~#card {
  transition: 300ms;
  filter: brightness(1.1);
}
.wrapper:hover #card::before {
  transition: 200ms;
  content: '';
  opacity: 80%;
}
.canvas {
  perspective: 800px;
  inset: 0;
  z-index: 200;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: "tr-1 tr-2 tr-3 tr-4 tr-5" "tr-6 tr-7 tr-8 tr-9 tr-10" "tr-11 tr-12 tr-13 tr-14 tr-15" "tr-16 tr-17 tr-18 tr-19 tr-20" "tr-21 tr-22 tr-23 tr-24 tr-25";
}
#card::before {
  content: '';
  filter: blur(2rem);
  opacity: 30%;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  transition: 200ms;
}
.tr-1  { grid-area: tr-1;  }
.tr-2  { grid-area: tr-2;  }
.tr-3  { grid-area: tr-3;  }
.tr-4  { grid-area: tr-4;  }
.tr-5  { grid-area: tr-5;  }
.tr-6  { grid-area: tr-6;  }
.tr-7  { grid-area: tr-7;  }
.tr-8  { grid-area: tr-8;  }
.tr-9  { grid-area: tr-9;  }
.tr-10 { grid-area: tr-10; }
.tr-11 { grid-area: tr-11; }
.tr-12 { grid-area: tr-12; }
.tr-13 { grid-area: tr-13; }
.tr-14 { grid-area: tr-14; }
.tr-15 { grid-area: tr-15; }
.tr-16 { grid-area: tr-16; }
.tr-17 { grid-area: tr-17; }
.tr-18 { grid-area: tr-18; }
.tr-19 { grid-area: tr-19; }
.tr-20 { grid-area: tr-20; }
.tr-21 { grid-area: tr-21; }
.tr-22 { grid-area: tr-22; }
.tr-23 { grid-area: tr-23; }
.tr-24 { grid-area: tr-24; }
.tr-25 { grid-area: tr-25; }
.tr-1:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
}
.tr-2:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
}
.tr-3:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
}
.tr-4:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
}
.tr-5:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
}
.tr-6:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
}
.tr-7:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
}
.tr-8:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
}
.tr-9:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
}
.tr-10:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
}
.tr-11:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
}
.tr-12:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
}
.tr-13:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.tr-14:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
}
.tr-15:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
}
.tr-16:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
}
.tr-17:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
}
.tr-18:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
}
.tr-19:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
}
.tr-20:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
}
.tr-21:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
}
.tr-22:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
}
.tr-23:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
}
.tr-24:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
}
.tr-25:hover~#card {
  transition: 125ms ease-in-out;
  transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
}
@media screen and (max-width: 576px) {
  .custom-container {
    width: 100%;
  }
  .wrapper {
    position: relative;
    width: 70px;
    height: 70px;
    transition: 200ms;
  }
  .wrapper:active {
    width: 80px;
    height: 80px;
  }
  .fix-margin-from-prev-element {
    margin-top: -20px;
  }
  .icon-restaurant-wrapper {
    width: 75% !important;
  }
}
@media screen and (min-width: 576px) {
  .custom-container {
    width: 100%;
  }
}
@media screen and (min-width: 1440px) {
  .icon-restaurant-wrapper {
    width: 33% !important;
  }
}
@media screen and (max-width: 1049px) {
    .cart-container {
        display:none
    }
}
.noselect {
  -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;
}
</style>