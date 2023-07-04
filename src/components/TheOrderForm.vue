<template>
    <Form class="order-form" @submit="createOrder()">
        <span>
            {{ resSendOrder }}
        </span>
        <h2 class="order-form__title">Оформление заказа:</h2>
        <div class="order-form__field">
            <span class="order-form__label">Имя:</span>
            <Field name="name" v-model="order.name" :rules="validName" type="text"/>
            <ErrorMessage name="name" />
        </div>
        <div class="order-form__field">
            <span class="order-form__label">Фамилия:</span>
            <Field name="second_name" :rules="validLastName" v-model="order.second_name" type="text"/>
            <ErrorMessage name="second_name" />
        </div>
        <div class="order-form__field">
            <span class="order-form__label">Дата рождения:</span>
            <Field name="date" :rules="validDate" type="text" v-model="order.date" />
            <ErrorMessage name="date" />
        </div>
       <div class="order-form__field">
            <span class="order-form__label">Адрес:</span>
            <Field name="adres" :rules="validField" type="text" v-model="order.adres" />
            <ErrorMessage name="adres" />
        </div>
        <div class="order-form__field">
            <span class="order-form__label">Номер карты:</span>
            <Field name="card" :rules="validField" type="text" v-model="order.card"/>
            <ErrorMessage name="card" />
        </div>
        <div class="order-form__field order-form__field--agree">
            <span class="order-form__label">Я согласен на обработку персональных данных</span>
            <Field name="personal" :rules="validField" type="checkbox" :value="true" />
            <ErrorMessage name="personal" />
        </div>
        <button class="order-form__submit">
            Заказать
        </button>
    </Form>
</template>

<style scoped lang="scss">
    @import './../assets/order-form.scss';
</style>

<script setup>
    import axios from 'axios';
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import {reactive, ref} from 'vue';

    let order = reactive({
        name: null,
        second_name: null,
        date: null,
        adres: null,
        card: null,
        personal: false
    });

    const resSendOrder = ref(null);

    function createOrder(){
        const res = axios.post('https://httpbin.org/post', order)
        .then(response => {
            if (response.status === 200 ){
                resSendOrder.value = 'Заказ успешно создан!';
            }
        })
        .catch((error) => {
            this.errors = error.response.data.errors;
            console.log('somthing went wrong')
            console.log(this.errors)
        })
    }

    function validName(value){
        if (!value) {
            return 'Обязательное поле';
        }

        const strongRegex = new RegExp("^[а-яА-Я ]+$");

        if(!strongRegex.test(value)){
            return 'Введите имя';
        } 
        
        return true;
    }

    function validLastName(value){
        if (!value) {
            return 'Обязательное поле';
        }

        const strongRegex = new RegExp("^[а-яА-Я ]+$");

        if(!strongRegex.test(value)){
            return 'Введите фамилию';
        } 
        
        return true;
    }

    function validDate(value){
        if (!value) {
            return 'Обязательное поле';
        }
        
        const strongRegex = new RegExp("\\d{4}-\\d{2}-\\d{2}");

        if(!strongRegex.test(value)){
            return 'Введите верную дату';
        } 
        
        return true;
    }

    function validField(value){
        console.log(value)
        if (!value) {
            return 'Обязательное поле';
        }

        return true;
    }
</script>