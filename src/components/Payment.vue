<script>
import axios from 'axios';
import { store } from '../stores/store';
import { services } from "../stores/services";
import braintree from 'braintree-web';
import AppHeader from './AppHeader.vue';
import AnotherFooter from '../components/main-sections/AnotherFooter.vue';


export default {

    name: "Payment",

        components:{
            AppHeader,
            AnotherFooter
        },

    data() {
        return {
            token: "",
            store,
            success:'',
            services
        }
    },
    async mounted() {


        // token
        axios.get('http://127.0.0.1:8000/api/orders/generate').then((res) => {


            braintree.client.create({
                authorization: res.data.token

            })
                .then(clientInstance => {
                    let options = {
                        client: clientInstance,
                        styles: {
                            input: {
                                'font-size': '15px',
                                'font-family': 'Open Sans'
                            }
                        },
                        fields: {
                            number: {
                                selector: '#creditCardNumber',
                                placeholder: '0000-0000-0000-0000'
                            },
                            cvv: {
                                selector: '#cvv',
                                placeholder: '123'
                            },
                            expirationDate: {
                                selector: '#expireDate',
                                placeholder: '00 / 00'
                            }
                        }
                    }
                    return braintree.hostedFields.create(options)
                })
                .then(hostedFieldInstance => {
                    this.hostedFieldInstance = hostedFieldInstance;
                })
                .catch(err => {
                    console.log(err);
                });


        })
    },
    methods: {
        async getToken() {
            await axios.get("http://127.0.0.1:8000/api/orders/generate")
                .then(response => {
                    this.token = response.data.token;
                    console.log("Token ottenuto con successo:", this.token);
                })
                .catch(error => {
                    console.error("Errore durante il recupero del token:", error);
                })
        },
        sendPayment() {


            this.hostedFieldInstance.tokenize().then(payload => {
                axios.post('http://127.0.0.1:8000/api/orders/make/payment', {

                    order: this.$route.params.id,
                    // token
                    token: payload.nonce,
                    // array oggetto user



                }).then(resp => {
                    // this.store.method.delete();
                    // this.$router.push({ path: '/restaurants', query: { success: true } });
                    console.log(resp);
                    this.success = resp.data.success;
                    if(this.success == true ){
                        store.cart=[];
                        services.cleanCart()
                        this.$router.push('/success')
                    }
                    console.log(this.success)
                })
            })
                .catch(err => {
                    console.error(err);
                })
        }
    }
}
</script>
<template>

    <AppHeader />
    <svg class="wave-1hkxOo headerWave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
        preserveAspectRatio="none">
        <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
            d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            fill="currentColor"></path>
    </svg>

    <div class="my-5 content w-50 m-auto pt-10 pb-10 transform-custom">
        <div class="card-custom w-75 m-auto mb-5 pb-5">
            <h4>
                Il tuo ordine
            </h4>
            <div v-for="item in store.cart" class="w-100 text-start d-flex justify-content-between">
                <div class="ps-2 ps-xl-5">
                    <h6 class="pt-2 ">{{item.name}}</h6>
                    <span class="text-black-50">{{item.price}} €</span>
                    <span class="text-black-50 ps-4">x{{item.quantity}}</span>
                </div>
            </div>
            <div class="totale-checkout">
                <div class="d-flex align-items-center justify-content-around pe-5">
                    <span class="ps-2 pt-3 ps-xl-5 fs-5 fw-semibold">Totale: {{store.total}} €</span>
                </div>
            </div>
        </div>

        <div v-if="this.success == true ">
            <h1>Il tuo ordine è avvenuto con successo</h1>
        </div>

        <form id="payment-form" @submit.prevent="sendPayment()" method="post" class="d-flex flex-column justify-content-center align-items-center mb-5">

            <div class="w-75 m-auto pt-5 mt-5" id="dropin-container">

                <label for="creditCardNumber" class="px-1 py-2">Numero Carta</label>
                <div id="creditCardNumber" class="form-control mb-2 custom-imput "></div>

                <label for="expireDate" class="px-1 py-2">Data di Scadenza</label>
                <div id="expireDate" class="form-control mb-2 custom-imput "></div>

                <div @mouseenter="hover = true" @mouseleave="hover = false" class="cvv-input">
                    <label for="cvv" class="px-1 py-2">CVV</label>
                    <div id="cvv" class="form-control mb-2 custom-imput "></div>
                </div>
            </div>
            <input class="custom-button btn bg-red text-white fw-bolder" type="submit" />

        </form>
    </div>

    <div class="bg-custom position-fixed">
        <svg class="wave-1hkxOo footerWave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
            preserveAspectRatio="none">
            <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
                d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                fill="currentColor"></path>
        </svg>
        <AnotherFooter />
    </div>

    

</template>

<style scoped lang="scss">

    .bg-red{
        background-color: #f96a5f;
    }

    .card-custom{
        padding: 1rem;
        border: 3px solid rgba(255, 136, 136, 0.164);
    }

    .headerWave {
    margin-top: -3px;
    color: white;
    background-color: #90d4ce;
    }

    .footerWave {
    z-index: -1 !important;
    color: #f96a5f;
    position: absolute;
    bottom: 50px;
    }


    .transform-custom{
        transform: translateY(-50%);
    }
    .custom-imput{
        height:40px;
        border-radius:30px
    }
    .custom-button{
        width: 20%;
    }

    .bg-custom {
    background-color: #F96A5F;
    margin-left: 100px;
    width: calc(100% - 100px);
    bottom: 0
    }

    .content {
    width: 70%;
    padding: 40px 40px;
    background-color: rgb(255, 255, 255) ;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #ffffffb0,
        2px 2px 5px rgba(94, 104, 121, 0.288);
    }

    @media screen and (max-width:577px) {

    .content {
        transform: translateY(-20%);
    }

    .content {
        width: 70% !important;
    }

    .footerWave {
        bottom: 80px;
    }

    .bg-custom {
        background-color: #F96A5F;
        margin-left: 0;
        width: 100%;
        bottom: 80px
    }

    .content {
        width: 90% !important;
    }

}

@media screen and (min-width:577px) and (max-width:780px) {
    .content {
        width: calc(70%) !important;
        margin-left: 20% !important;
    }
}

@media screen and (min-width:1400px) {
    .content {
        width: 30% !important;
    }

    .transform {
        transform: translateY(-50%);
    }
}

@media screen and (max-width: 959px) {
    .footerWave {
        bottom: 95px;
    }
}

</style>