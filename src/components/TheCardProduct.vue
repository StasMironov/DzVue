<template>
    <div class="card-product">
        <div class="card-product__img">
            <img :src="productItem.image" alt="product"/>
        </div>
        <div class="card-product__wrap">
            <div class="card-product__title">
                {{productItem.title}}
            </div>
            <div class="card-product__category">
            </div>
            <div class="card-product__desc">
                {{ productItem.description }}
            </div>
            <div class="card-product__bottom">
                <span class="card-product__price">{{productItem.price}}</span>
                <button 
                @click="addToCart"
                class="card-product__btn btn">
                    В корзину
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/card-product.scss';
</style>

<script setup>
    import {onMounted, ref} from 'vue';
    const props = defineProps(['productId', 'url']);
    const productId = props.productId;

    const productItem = ref({
        image:null,
        title: null,
        category:null,
        description: null,
        price: 0
    });

    let arrProducts;
    
    onMounted(()=>{
        if (localStorage.getItem('goods')) {
            const product = JSON.parse(localStorage.getItem('goods')).filter(item => item.id == productId);
            if (!('qty' in product[0])) {
                product[0].qty = 1;
            }
            productItem.value = product[0];
        }  
    });

    const addToCart = () => {
        arrProducts = JSON.parse(localStorage.getItem('cart')) || [];

        if(arrProducts.length == 0){
            arrProducts.push(productItem.value);
        } else {
            if(!!!arrProducts.find(element => element.id == productItem.value.id)) {
                arrProducts.push(productItem.value);
            } else {
                arrProducts.forEach(element => {
                    if(element.id == productItem.value.id){
                        element.qty += 1;
                    } 
                });
           }
        }

        localStorage.setItem('cart', JSON.stringify(arrProducts));
    }
    
</script>