<script setup>
    import TheProduct from './components/TheProduct.vue'
    import TheHeader from './components/TheHeader.vue';
    import TheSearchProduct from './components/TheSearchProduct.vue';
    import TheNewProduct from './components/TheNewProduct.vue';
    import TheOrderForm from './components/TheOrderForm.vue';
    import fetchProducts from './fetchProducts';
    import { ref, onMounted, watch } from 'vue';

    const getProducts = ref(null);
    const productsItems = ref(null);
    const baseURL = 'https://fakestoreapi.com/products';
    const category = ["men's clothing", "jewelery", "electronics", "women's clothing"]

    onMounted(() => {
      fetchProducts(baseURL).then(products => {
        productsItems.value = products;
        getProducts.value = productsItems.value;
      })
    });

    function updateList(item){
      item.id = getProducts.value.length + 1;
      getProducts.value.push(item);
    }
</script>

<template>
  <TheHeader />
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
  </main>
</template>

<style scoped lang="scss">
  @import './assets/style.scss';
</style>
