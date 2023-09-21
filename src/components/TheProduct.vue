<template>
    <div class="product">
        <div class="product__wrapper">
            <div class="product__left">
                <div class="product__img">
                    <img :src="item.image" alt="product"/>
                </div>
            </div>
            <div class="product__right">
                <router-link class="product__title" :to="{name: 'theproductdetail', params: {productId: item.id}}">{{item.title}}</router-link>
                <div class="product__category"><span class="product__label">Category: </span>{{item.category}}</div>
                <div class="product__description">{{item.description}}</div>
                <div class="product__rice"><span class="product__label">Price:</span> {{item.price}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
   @import '../assets/product.scss';
</style>

<script setup>
    defineProps({
        item: Object
    });
</script>