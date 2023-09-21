import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Cart from '@/components/Cart.vue';
import Auth from '@/components/Auth.vue';
import Admin from '@/components/Admin.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            alias: '/home',
            props: true
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            alias: '/cart',
            props: true
        },
        {
            path: '/theproductdetail/:productId',
            name: 'theproductdetail',
            props: true,
            component: ()=>import('../components/TheProductDetail.vue')
        },
        {
            path: '/auth',
            name: 'auth',
            component: Auth, 
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        }
    ]
});

export default router;