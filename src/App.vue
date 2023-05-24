<script setup>
    import TheProduct from './components/TheProduct.vue'
    import fetchProducts from './fetchProducts';
    import { ref, onMounted } from 'vue';

    const productsItems = ref(null);
    const baseURL = 'https://testapi.jasonwatmore.com/products';

    onMounted(() => {
      fetchProducts(baseURL).then(products => {
        productsItems.value = products;
      });
    });
</script>

<template>
  <header class="header">
    Список товаров
  </header>

  <main>
    <div class="wrapper">

      <div class="products">
          <TheProduct 
            v-for="product in productsItems" :key = "product.id"
            :item = "product"
            class="products__item"/> 
      </div>
    </div>
  </main>
</template>

<style scoped>
  .products {
    max-width: 245px;
    margin: auto;
  }

  .header {
    text-align: center;
    margin: 10px 0;
    font-size: 24px;
  }
</style>
