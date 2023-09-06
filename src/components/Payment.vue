<script>
import axios from 'axios';
import { store } from '../stores/store';

export default {

    name: "Payment",
    data() {
        return {
            token: ""
        }
    },
    async mounted() {
        console.log('montato');
        try {
            await this.getToken(); // Attendere il completamento del getToken prima di procedere
            this.setupBraintree(); // Chiamare un nuovo metodo per configurare Braintree
        } catch (error) {
            console.error("Errore durante il recupero del token:", error);
        }
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
        setupBraintree() {
            // Configura Braintree solo dopo aver ottenuto il token con successo
            braintree.dropin.create({
                authorization: this.token,
                container: document.getElementById('dropin-container'),
                // ... altre configurazioni
            }).then((dropinInstance) => {
                // ... il resto del codice di configurazione di Braintree
            }).catch((error) => {
                console.error("Errore durante la configurazione di Braintree:", error);
            });
        },
        async submitPayment() {
            const form = document.getElementById('payment-form');
            const nonceInput = document.getElementById('nonce');
            // Utilizza Braintree per ottenere il nonce del pagamento
            braintree.dropin.create({
                authorization: this.token,
                container: document.getElementById('dropin-container'),
            }).then((dropinInstance) => {
                dropinInstance.requestPaymentMethod(function (err, payload) {
                    if (err) {
                        console.error("Errore durante la richiesta del metodo di pagamento:", err);
                        return;
                    }

                    // Assegna il nonce del pagamento all'input hidden
                    nonceInput.value = payload.nonce;

                    // Ora puoi inviare il form al backend
                    form.submit();
                });
            }).catch((error) => {
                console.error("Errore durante la configurazione di Braintree:", error);
            });
        },

    }
}

</script>
<template>
    <form id="payment-form" action="http://127.0.0.1:8000/api/orders/make/payment" method="post">

        <div class="w-75 m-auto" id="dropin-container"></div>
        <input type="submit" />
        <input type="hidden" id="nonce" name="payment_method_nonce" />
    </form>
</template>