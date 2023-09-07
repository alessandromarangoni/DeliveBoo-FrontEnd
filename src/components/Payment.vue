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
                                'font-size': '30px',
                                'font-family': 'Arial, Helvetica, sans-serif',
                                'color': 'rgb(255, 255, 255)!important',
                            },
                        },
                        fields: {
                            number: {
                                selector: '#creditCardNumber',
                                placeholder: '0000 0000 0000 0000'
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

        <form id="payment-form" @submit.prevent="sendPayment()" method="post" class="d-flex flex-column justify-content-center text-white align-items-center mb-5">

            <div class="w-75 m-auto pt-5 mt-5 border p-4 position-relative card-background" id="dropin-container">

                <svg version="1.1" class="chip" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" xml:space="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
            </svg>

                <div class="mx-5 text-white">
                    <label for="creditCardNumber" class="px-1 pt-5">Numero Carta</label>
                    <div id="creditCardNumber" class="form-control mb-2 custom-imput imput-carta border-0"></div>
                </div>

                <svg class="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                    <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path><path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path><path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                </svg>

                <div class="d-flex mx-5 my-4 custom-margin-mobile">
                    
                    <div class="d-flex flex-column justify-content-center w-50">
                        <label for="expireDate" class="text-white">Data di Scadenza</label>
                        <div id="expireDate" class="form-control mb-2 custom-imput border-0 text-white"></div>
                    </div>

                    <div @mouseenter="hover = true" @mouseleave="hover = false" class="text-white w-50">
                        <label for="cvv" class="">CVV</label>
                        <div id="cvv" class="form-control mb-2 custom-imput border-0"></div>
                    </div>

                </div>
            </div>
            <input class="custom-button btn bg-red text-white fw-bolder mt-5" type="submit" />

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


.card-background{
    background: #3441ff;
    border-radius:20px ;
    aspect-ratio: 16 / 9 !important;
}
.logo{
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 80px;
}

.chip{
    height: 50px!important;
    width: 80px;
}

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
        border-radius:30px;
        color: white!important;
        background: #90d4ce00;
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

    .card-background{
        padding: 0!important;

        .chip{
            margin-top: 10px;
        }
    }    
    .content {
        transform: translateY(-20%);
        padding: 0;
    }

    .custom-margin-mobile{
        margin-top: 0!important;
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
        width: 100% !important;
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
        width: 40% !important;
    }
    .custom-margin-mobile{
        margin-top: 10%!important;
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