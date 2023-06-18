<template>
    <Form ref="form" class="new-product" @submit="addProduct">
        <h2 class="new-product__title">Добавить товар:</h2>
        <div class="new-product__field">
            <span class="new-product__label">Название:</span>
            <Field name="title" :rules="validTitle" v-model="good.title" type="text"/>
            <ErrorMessage name="title" />
        </div>
         <div class="new-product__field">
            <span class="new-product__label">Категория:</span>
            <Field name="category" :rules="validateField" v-model="good.category" as="select">
                <option v-for="(item, key) in category" :value="item">{{item}}</option>
            </Field>
            <ErrorMessage name="category" />
        </div>
        <div class="new-product__field">
            <span class="new-product__label">Изображение:</span>
            <Field name="image" :rules="validateField" @change="changeFile" type="file" accept="image/*" />
            <ErrorMessage name="image" />
        </div>
        <div class="new-product__field">
            <span class="new-product__label">Описание:</span>
            <Field name="desc" :rules="validTitle" v-model="good.description" />
            <ErrorMessage name="desc" />
        </div>
        <div class="new-product__field">
            <span class="new-product__label">Цена:</span>
            <Field name="price" :rules="validateField" v-model="good.price" type="number" />
            <ErrorMessage name="price" />
        </div>
        <button>Добавить</button>
    </Form>
</template>

<style scoped lang="scss">
    @import './../assets/new-product.scss';
</style>

<script setup>
    const props = defineProps({
        category: Array,
        required: true
    })

    const emit = defineEmits(['addProduct']);

    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { reactive} from 'vue';

    let good = reactive({
        title: null,
        category: null,
        image: null,
        description: null,
        price: null
    });

    function addProduct(value){
        emit('addProduct', good);
        good = {};
        event.target.reset();
    }

    function validateField(value) {
      if (!value) {
        return 'Обязательное поле';
      }
      return true;
    }

    function validTitle(value){
        if (!value) {
            return 'Обязательное поле';
        }
        if (value.length < 10) {
            return 'Кол-во символов должно быть больше 10';
        }
        return true;
    }

    function changeFile(event) {
      let input = event.target;
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
         good.image  = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
</script>