<template>
    <PageTemplate>
        <template #header>
            <PageHeader/>
        </template>
        <template #main>
            <div class="container p-t">
                <div class="admin">
                    <h1>Админка</h1>
                    <div class="admin__wrap">
                        <TheNewProduct />
                    </div>
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
    import TheNewProduct from '@/components/TheNewProduct.vue';
</script>