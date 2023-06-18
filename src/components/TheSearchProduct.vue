<template>
    <div class="search-product">
        <div class="search-product__field">
            <span class="search-product__title">Поиск по названию:</span>
            <input 
                @input="$emit('update:modelValue', searchProductsName)"
                v-model="queryName"
                class="search-product__field"
                type="text"
            >
        </div>
        <div class="search-product__field">
            <span class="search-product__title">Поиск по цене:</span>
            <input 
                @input="$emit('update:modelValue', searchProductsPrice)"
                v-model="queryPrice"
                class="search-product__field"
                type="number"
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import './../assets/search-product.scss';
</style>

<script setup>
    const props = defineProps({
        modelValue: {
            type: Array,
        },
        products: Array
    });

    defineEmits(['update:modelValue']);

    import {ref, computed} from 'vue';

    const queryName = ref(null);
    const queryPrice = ref(null);

    const searchProductsName = computed(()=>{
        const queryText = queryName.value.toLowerCase();
        return props.products.filter(item => item.title.toLowerCase().indexOf(queryText) >= 0);
    });
    
    const searchProductsPrice = computed(()=>{
        if(queryPrice.value !== '') {
            return props.products.filter(item => String(item.price).indexOf(queryPrice.value) >= 0)
        } else {
            return props.products
        }
    });
</script>