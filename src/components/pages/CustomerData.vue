<script>
import AppHeader from '../AppHeader.vue';
import AppFooter from '../main-sections/AppFooter.vue';
import { store } from '../../stores/store';
import axios from 'axios';

export default {
    name: 'CustomerData',
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            store,
            name: "",
            address: "",
            telephone: "",
            email: "",
            note: ""
        }
    },
    methods: {
        createOrder() {
            let data = {
                products: store.cart,
                data: {
                    customer_name: this.name,
                    customer_address: this.address,
                    customer_tel: this.telephone,
                    customer_email: this.email,
                    customer_note: this.note
                }
            }
            axios.post('http://127.0.0.1:8000/api/orders/', data)
                .then(res => {
                    console.log(res.data.order.id);
                    this.$router.push({ name: "Payment", params: { id: res.data.order.id } })
                }).catch(err => {
                    console.log(err);
                })
        }
    }
}
</script>

<template>
    <AppHeader />
    <svg class="wave-1hkxOo headerWave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path class="wavePath-haxJK1 animationPaused-2hZ4IO" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
    </svg>
        <div class="d-flex align-items-center transform m-auto custom-card z-index ">
            <div class="content m-auto w-50 ">
                <div class="text">
                    Inserisci i tuoi dati
                </div>
                <form @submit.prevent="createOrder()">
                    <div class="field">
                        <input v-model="name" required type="text" class="input">
                        <span class="span"></span>
                        <label class="label">Nome completo</label>
                    </div>
                    <div class="field">
                        <input v-model="address" required type="text" class="input">
                        <span class="span"></span>
                        <label class="label">Indirizzo</label>
                    </div>
                    <div class="field">
                        <input v-model="telephone" required type="text" class="input">
                        <span class="span"></span>
                        <label class="label">Tel.</label>
                    </div>
                    <div class="field">
                        <input v-model="email" required type="email" class="input" placeholder="Email">
                        <span class="span"></span>
                    </div>
                    <div class="field">
                        <input v-model="note" type="text" class="input" placeholder="Note">
                        <span class="span"></span>
                    </div>
                    <button type="submit" class="button">Conferma</button>
                </form>
                <div class="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Dettagli ordine:</button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse " >
                            <div class="accordion-body">
                                <div class="mb-5 pb-5 container-fluid">
                                    <h4>Il tuo ordine</h4>
                                    <div v-for="item in store.cart" class="w-100 text-start d-flex justify-content-between">
                                        <div class="ps-2 ps-xl-5">
                                            <h6 class="pt-2 ">{{ item.name }}</h6>
                                            <span class="text-black-50">{{ item.price }} €</span>
                                            <span class="text-black-50 ps-4">x{{ item.quantity }}</span>
                                        </div>
                                    </div>
                                    <div class="totale-checkout">
                                        <div class="d-flex align-items-center justify-content-around pe-5">
                                            <span class="ps-2 pt-3 ps-xl-5 fs-5 fw-semibold">Totale: {{ store.total }} €</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-custom position-relative z-index-less">
            <svg class="wave-1hkxOo footerWave position-absolute" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path class="wavePath-haxJK1 animationPaused-2hZ4IO" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
            </svg>
            <AppFooter />
        </div>
</template>

<style scoped lang="scss">
.z-index-less {
    z-index: 0 !important;
}
.z-index {
    z-index: 99 !important;
}
.headerWave{ margin-top: -3px; color:white ; background-color: #90d4ce; max-height: 50px; width: 100%;  }
.footerWave{ z-index: -2; color: #f96a5f; position: absolute; bottom: 50px; max-height: 50px; width: 100%;}

.custom-card{
    padding-left: 100px;
}
.bg-custom {
    background-color: #F96A5F;
    margin-left: 100px;
    width: calc(100% - 100px);
    bottom: 0
}
.transform {
    transform: translateY(-35%);
}
.content {
    width: 70%;
    padding: 40px 40px;
    background: #f0f5fd;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #ffffffb0,
        2px 2px 5px rgba(94, 104, 121, 0.288);
}
.content .text {
    font-size: 33px;
    font-weight: 600;
    margin-bottom: 35px;
    color: #595959;
}
.field {
    height: 50px;
    width: 100%;
    display: flex;
    position: relative;
    margin-top: 20px;
}
.field .input {
    height: 100%;
    width: 100%;
    padding-left: 45px;
    outline: none;
    border: none;
    font-size: 18px;
    background: #f6faff;
    color: #595959;
    border-radius: 25px;
    box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #ffffffb7;
}
.field .input:focus {
    box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #ffffff73;
}
.field .span {
    position: absolute;
    color: #595959;
    width: 50px;
    line-height: 55px;
}
.field .label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 45px;
    pointer-events: none;
    color: #666666;
}
.field .input:valid~label {
    opacity: 0;
}
.button {
    margin: 15px 0;
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    font-weight: 600;
    background-color: #F96A5F;
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #ffffff;
    box-shadow: 2px 2px 5px #BABECC, -5px -5px 10px #ffffff73;
}
.button:focus {
    color: #ffffff;
    box-shadow: inset 2px 2px 5px #BABECC,
        inset -5px -5px 10px #ffffff73;
}
@media screen and (max-width:577px) {
    .custom-card{
    padding-left: 0px;
    padding-top: 50px;
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