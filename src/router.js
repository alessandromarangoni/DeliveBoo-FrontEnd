import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './components/pages/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
        routes: [
            {
                path: '/home',
                name: 'home',
                component: AppHome
            },
        ]
    });
export { router };