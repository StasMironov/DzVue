<script setup>
import TheProduct from './components/TheProduct.vue'
    import { ref, onMounted } from 'vue';
    const products = ref(null);

    function fetchApi(){
      fetch('https://testapi.jasonwatmore.com/products')
        .then(response => response.json())
        .then(data => products.value = data);
    }

    onMounted(() => {
      fetchApi();
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
            v-for="product in products" :key = "product.id"
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
