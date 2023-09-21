<template>
    <header class="header">
        <div class="header__container container">
            <div class="header__logo header-logo">
                Logo
            </div>
            <Navigation 
                class="header__nav" :nav="nav"/>
            <button 
                v-if="authCheck"
                @click="authNavigate"
                class="button button-auth">Выход</button>
            <button 
                v-else
                @click="authNavigate"
                class="button button-auth">Вход</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @import '@/assets/header.scss';
</style>

<script setup>
    import Navigation from './Navigation.vue';
    import { useRouter } from 'vue-router';
    import {computed, ref} from 'vue';
    
    const flag = ref(JSON.parse(localStorage.getItem('auth')));

    const authCheck = computed(()=>{   
        return flag.value;
    });

    const nav = [
        {
            title: 'Главная',
            href: '/'
        },
        {
            title: 'Корзина',
            href: '/cart'
        },
        {
            title: 'Админка',
            href: '/admin',
            admin: true
        }
    ];

    const router = useRouter();

    const authNavigate = () => {
        if(flag.value){
            localStorage.setItem('auth', JSON.stringify(false));
            flag.value = JSON.parse(localStorage.getItem('auth'));
        } 
        router.push({path: '/auth'});  
    }
</script>