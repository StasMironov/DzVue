<template>
    <PageTemplate>
        <template #header>
            <PageHeader/>
        </template>
        <template #main>
            <div class="container p-t">
                <h1>Home</h1>
                <div class="products">
                    <TheProduct 
                        v-for="product in data"
                        :item = "product"
                        class="products__item"/> 
                </div>
            </div>
        </template>
    </PageTemplate>
</template>

<style scoped lang="scss">
    @import '../assets/products.scss';
</style>

<script setup> 
    import PageTemplate from '@/components/general/PageTemplate.vue';
    import PageHeader from '@/components/general/PageHeader.vue';
    import TheProduct from '@/components/TheProduct.vue'
    const props = defineProps(['data']);
    const data = JSON.parse(localStorage.getItem('goods')) || [];
    console.log(data)
</script>