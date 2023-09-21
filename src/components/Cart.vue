<template>
    <PageTemplate>
        <template #header>
            <PageHeader/>
        </template>
        <template #main>
            <div class="container p-t">
                <div class="cart">
                    <h1 class="cart__title">Cart</h1>
                    <div class="cart__container">
                        <div class="cart__left">
                            <div class="cart__products">
                                <TheCartProduct
                                    v-for="product in products"
                                    :item = "product"
                                    @delete-product="deleteProduct"
                                    class="cart__item"/> 
                            </div>   
                        </div>
                        <div class="cart__right">
                            <div class="cart__info">                 
                                <div class="cart__wrap">
                                    <span class="cart__label">Кол-во:</span>
                                    <span class="cart__qty">{{qty}}</span>
                                </div>
                                <div class="cart__wrap">
                                    <span class="cart__label">Всего:</span>
                                    <span class="cart__qty">{{itogSumm}} руб</span>
                                </div>
                            </div>
                            <button 
                                @click="clearCart"
                                :disabled="!qty"
                                class="cart__action btn">Очистить корзину</button>
                        </div>
                    </div>
                    
                </div>    
            </div>
        </template>
    </PageTemplate>
</template>

<script setup>
    import PageTemplate from '@/components/general/PageTemplate.vue';
    import PageHeader from '@/components/general/PageHeader.vue';
    import TheCartProduct from './TheCartProduct.vue';
    import {ref, computed} from 'vue';
    const products = ref(null);

    if(localStorage.getItem('cart') !== null) {
        products.value = JSON.parse(localStorage.getItem('cart'));
    }

    const clearCart = () => {
        if(localStorage.getItem('cart') !== null) {
            localStorage.removeItem("cart");
            products.value = [];
        }
    }

    const deleteProduct = (data) => {
        products.value = data;
    }

    const qty = computed(()=>{
        let count = 0;

        if(products.value !== null) {
            if(products.value.length > 0) {
                products.value.forEach(element => count += element.qty);
            }
        }
        return count;
    });

    const itogSumm = computed(()=>{
        let count = 0;

        if(products.value !== null) {
            if(products.value.length > 0) {
                products.value.forEach(element => {
                    if(element.qty > 1) {
                        count += element.price * element.qty;
                    } else {
                        count += element.price
                    }
                });
            }
        }
        return count;
    });
</script>

<style lang="scss">
    @import '../assets/cart.scss';
</style>