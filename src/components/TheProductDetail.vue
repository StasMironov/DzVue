<template>
    <PageTemplate>
        <template #header>
            <PageHeader/>
        </template>
        <template #main>
            <div class="container p-t">
                <div class="product-detail">
                    <TheCardProduct
                        class="product-detail__card"
                        :url=baseUrl
                        :productId=productId />
                </div>
            </div>
        </template>
    </PageTemplate>
</template>

<style scoped>
</style>

<script setup>
    import PageTemplate from '@/components/general/PageTemplate.vue';
    import PageHeader from '@/components/general/PageHeader.vue';
    import TheCardProduct from '@/components/TheCardProduct.vue'

    const props = defineProps(['productId', 'url']);
    const baseUrl = window.baseURL;
    const productId = props.productId;

</script>