<template>
    <div class="navigation">
        <nav class="navigation__container">
            <ul class="navigation__list">
                <li v-for="item in nav" class="navigation__link">
                    <router-link 
                        v-show="item.admin && visibleLink"
                        :to="item.href">
                        {{ item.title }}
                    </router-link>
                    <router-link
                        v-show="!item.admin"
                        :to="item.href"    
                    >
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/navigation.scss';
</style>

<script setup>
    import {computed} from 'vue';
    defineProps(['nav']);

    const visibleLink = computed(()=>{
        return JSON.parse(localStorage.getItem('auth'));
    });

</script>