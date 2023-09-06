<script>
import axios from 'axios';

export default {

    name: "Payment",
    data() {
        return {
            token: ""
        }
    },
    methods: {
        async braintreeMethods() {
            const form = document.getElementById('payment-form');
            // Step two: create a dropin instance using that container (or a string
            //   that functions as a query selector such as '#dropin-container')
            braintree.dropin.create({
                authorization: this.token,
                container: document.getElementById('dropin-container'),
                // ...plus remaining configuration
            }).then((dropinInstance) => {

                dropinInstance.requestPaymentMethod().then((payload) => {
                    // Step four: when the user is ready to complete their
                    //   transaction, use the dropinInstance to get a payment
                    //   method nonce for the user's selected payment method, then add
                    //   it a the hidden field before submitting the complete form to
                    //   a server-side integration
                    document.getElementById('nonce').value = payload.nonce;
                    form.submit();
                    console.log(dropinInstance);
                    console.log("OK");
                    // Use 'dropinInstance' here
                    // Methods documented at https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html
                }).catch((error) => { throw error; });
            }).catch((error) => {
                console.log(error);
            });
        },
        async getToken() {
            await axios.get("http://127.0.0.1:8000/api/orders/generate")
                .then(response => {
                    this.token = response.data.token
                    this.braintreeMethods()
                    console.log(this.token)

                }).catch(err => {
                    console.log(err);
                })
        },
    },
    mounted() {
        this.getToken();
    }
}

</script>
<template>
    <form id="payment-form" action="http://127.0.0.1:8000/api/make/payment" method="post">
        <!-- Putting the empty container you plan to pass to
      'braintree.dropin.create' inside a form will make layout and flow
      easier to manage -->
        <div class="w-75 m-auto" id="dropin-container"></div>
        <input type="submit" />
        <input type="hidden" id="nonce" name="payment_method_nonce" />
    </form>
</template>