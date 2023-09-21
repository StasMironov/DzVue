<template>
  <router-view></router-view>
  <!-- <TheHeader />
  <main>
    <div class="wrapper">
      <TheSearchProduct
        :products=productsItems v-model="getProducts"
      />
      <TheNewProduct :category="category" @add-product="updateList" />
      <div class="products">
          <TheProduct 
            v-for="product in getProducts" :key = "product.id"
            :item = "product"
            class="products__item"/> 
            <div v-if="getProducts == ''">
              Такого товара нет!
            </div>
      </div>
      <TheOrderForm />
    </div>
  </main> -->
    
</template>

<script setup>

    // import Home from '@/components/Home.vue';
    // import TheProduct from './components/TheProduct.vue'
    // import TheHeader from './components/TheHeader.vue';
    // import TheSearchProduct from './components/TheSearchProduct.vue';
    // import TheNewProduct from './components/TheNewProduct.vue';
    // import TheOrderForm from './components/TheOrderForm.vue';
    import fetchProducts from './fetchProducts';
    import {onMounted, ref, computed, watch } from 'vue';
    import {useRouter, useRoute} from 'vue-router';
    import Modal from './components/Modal.vue';
    const isModalVisible = ref(false);


   // const getProducts = ref(null);
    const route = useRoute();
    const data = ref(null);
    const productsItems = ref(null);
    window.baseURL = 'https://fakestoreapi.com/products';
    // const category = ["men's clothing", "jewelery", "electronics", "women's clothing"]

    window.auth = {
      login: 'admin',
      password: '123'
    };

    if (localStorage.getItem('auth') === null) {
      localStorage.setItem('auth', JSON.stringify(false));
    }

    window.data = {};

    onMounted(() => {
      fetchProducts(window.baseURL).then(products => {
        productsItems.value = products;

        if (localStorage.getItem('goods') === null) {
          localStorage.setItem('goods', JSON.stringify(productsItems.value));
        }
      })
    });

    // watch(()=>{
    //   if(route.path === '/') {
    //     data.value = 
    //   } else {
    //     data.value = '';
    //   }
    // });
</script>

<style scoped lang="scss">
  @import './assets/style.scss';
</style>
