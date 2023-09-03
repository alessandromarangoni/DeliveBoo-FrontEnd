import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './components/pages/AppHome.vue';
import AppRestaurant from './components/pages/AppRestaurant.vue';
import NotFound from './components/NotFound.vue'

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
            }

        ]

    });
export { router };