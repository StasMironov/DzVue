<template>
    <div class="cart-product">
        <div class="cart-product__img">
            <img :src="item.image" alt="product"/>
        </div>
        <div class="cart-product__wrap">
            <div class="cart-product__title"> 
                {{ item.title }}
            </div>
            <div class="cart-product__categor">
                {{item.category}}
            </div>
            <div class="cart-product__desc">
                {{item.description}}
            </div>
            <div class="cart-product__bottom">
                <span class="cart-product__label">Кол-во:</span>
                <span class="cart-product__qty">{{item.qty}}</span>
            </div>
            <button @click="deleteItem" class="cart-product__action">Удалить</button>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    const products = ref(null);

    const emit = defineEmits(['delete-product']);

    const props =  defineProps({
        item: Object
    });

    const deleteItem = () => {
        if(localStorage.getItem('cart') !== null) {
            products.value = JSON.parse(localStorage.getItem('cart'));

           if(products.value.length){
                products.value.forEach(element => {
                    if(element.id == props.item.id){
                        if(element.qty>1){
                            element.qty--;
                        } else {
                            products.value = products.value.filter(element =>  element.id != props.item.id); 
                        }
                    }
                });
                localStorage.setItem('cart', JSON.stringify(products.value));
           }
        }

        emit('delete-product', products.value);
    }

</script>


<style lang="scss">
    @import '../assets/cart-product.scss';
</style>