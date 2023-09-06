<script>
import axios from 'axios';
import { store } from '../stores/store';
import braintree from 'braintree-web';

export default {

    name: "Payment",
    data() {
        return {
            token: ""
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
    <form id="payment-form" @submit.prevent="sendPayment()" method="post">



        <div class="w-75 m-auto" id="dropin-container">

            <label for="creditCardNumber">Numero Carta</label>
            <div id="creditCardNumber" class="form-control mb-2"></div>

            <label for="expireDate">Data di Scadenza</label>
            <div id="expireDate" class="form-control mb-2"></div>

            <div @mouseenter="hover = true" @mouseleave="hover = false" class="cvv-input">
                <label for="cvv">CVV</label>
                <div id="cvv" class="form-control mb-2"></div>
            </div>
        </div>
        <input type="submit" />

    </form>
</template>