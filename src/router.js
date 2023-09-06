import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './components/pages/AppHome.vue';
import AppRestaurant from './components/pages/AppRestaurant.vue';
import CustomerData from './components/pages/CustomerData.vue'
import NotFound from './components/NotFound.vue'
import Payment from './components/Payment.vue'

const router = createRouter({
    history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: "/restaurant/:id",
                name: "AppRestaurant",
                component: AppRestaurant
            },
            {
                path: '/error/:code',
                name: 'error',
                component: NotFound
            },
            {
                path: '/review',
                name: 'CustomerData',
                component: CustomerData
            },
            {
                path: '/payment',
                name: 'Payment',
                component: Payment
            }

        ]

    });
export { router };