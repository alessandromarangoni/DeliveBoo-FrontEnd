<script>
import { store } from '../../stores/store.js';
import { services } from '../../stores/services';
    export default {
        name: "Cart",
        data() {
            return {
                services,
                store,
            }
        },
        methods: {

        },
        created() {
            let localeStorageCart = localStorage.getItem('cart')
            if (localeStorageCart) {
                localeStorageCart = JSON.parse(localeStorageCart); 
                store.cart = localeStorageCart;
            } else {
                store.cart = [];
            }
        },

    }
</script>
<!-- //  al refresh della pagina il carrello risulta vuoto -->
<template>
    <div class="card-custom-menu position-relative p-4">
        <div class="p-1 set-height" id="style-7">
            <div>
                <h3 class="pt-3 pb-4 me-5">Carrello</h3>
            </div>
            <!-- div per v-for -->
            <div v-for="item in store.cart" class="w-100 text-start d-flex justify-content-between">
                <div class="ps-2 ps-xl-5">
                    <h6 class="pt-2 ">{{item.name}}</h6>
                    <span class="text-black-50">{{item.price}} €</span>
                </div>
                <div class="d-flex align-items-center pe-3 ps-2 ps-xl-5">
                    <div class="custom-imput minus" @click="services.subProduct(item)"><i class="fa-solid fa-minus text-black-50 custom-icon"></i></div>
                    <div class="custom-imput">{{item.quantity}}</div>
                    <div class="custom-imput plus" @click="services.addProduct(item)"><i class="fa-solid fa-plus text-black-50 custom-icon"></i></div>
                </div>
                <div class="totale-checkout">
                    <div class="d-flex align-items-center justify-content-around">
                        <span class="ps-2 pt-3 ps-xl-5 fs-5 fw-semibold">{{store.total}} €</span>
                        <button class="cssbuttons-io-button mt-3" > Checkout
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                            </div>
                        </button>

                        <button class="cssbuttons-io-button mt-3" @click="services.cleanCart()"> Svuota
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

#style-7::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
	border-radius: 10px;
}

#style-7::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

#style-7::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.44, rgb(122,153,217)), color-stop(0.72, rgb(73,125,189)), color-stop(0.86, rgb(28,58,148)));
}


.set-height{
    height: 350px;
    overflow-y:scroll ;
}

.card-custom-menu {
  min-width: 250px;
  height: 454px;
  background: rgb(255, 255, 255);
  border-radius: 40px 5px 40px 5px;
}


.totale-checkout{
  background-color: #F5F5F5;  
  height: 70px;
  border-top: 1px solid rgba(0, 0, 0, 0.24);
  position: absolute; /* Imposta il posizionamento assoluto */
  bottom: 0;
  right: 0;
  width: 100%; /* Occupa l'intera larghezza del genitore */
}
    
.custom-imput{
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.custom-icon{
    transform: translate(5% , 5%);
}

.plus{
    border: 3px solid rgba(78, 223, 78, 0.842);
    &:hover{
        scale: 1.1;
    }
    &:active{
        scale: 1.0;
    }
}

.minus{
    border: 3px solid rgba(223, 107, 78, 0.863);
    &:hover{
        scale: 1.1;
    }
    &:active{
        scale: 1.0;
    }
}

.cssbuttons-io-button {
  background: #F96A5F;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: .5rem;
  font-size: 14px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 2.8em;
}

.cssbuttons-io-button .icon {
  background: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #F96A5F;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #F96A5F;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

@media screen and (min-width: 1100px) {
        .card-custom-menu {
            width: 350px;
        }
    }
</style>