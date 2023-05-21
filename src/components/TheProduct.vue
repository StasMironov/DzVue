
<template>
    <div class="product">
        <div class="product__id">{{item.id}}</div>
        <div class="product__name">{{item.name}}</div>
    </div>
</template>

<style scoped>
    .product {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-bottom: 2px solid;
    }

    .product__id,  
    .product__name {
        font-weight: 700;
        font-size: 18px;
        text-align: center;
    }

    .product__id {
        margin-right: 5px;
    }
</style>

<script setup>
    defineProps({
        item: Object
    })
</script>