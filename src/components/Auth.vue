<template>
    <PageTemplate>
        <template #header>
            <PageHeader/>
        </template>
        <template #main>
            <div class="container p-t">
                <h1>Авторизация</h1>
                <div class="auth">
                   <Form class="auth__form" @submit="checkAuth">
                        <div class="auth__field">
                            <span class="auth__label">Логин</span>
                            <Field name="login" type="text" :rules="validateLogin" />
                            <ErrorMessage name="login" class="auth__error" />
                        </div>
                        <div class="auth__field">
                            <span class="auth__label">Пароль</span>
                            <Field name="password" type="password" :rules="validatePassword" />
                            <ErrorMessage name="password" class="auth__error" />
                        </div>
                        <div class="auth__field">
                            <button>Авторизация</button>
                        </div>
                   </Form>
                </div>
            </div>
        </template>
    </PageTemplate>
</template>

<script setup>
    import PageTemplate from '@/components/general/PageTemplate.vue';
    import PageHeader from '@/components/general/PageHeader.vue';
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { useRouter } from 'vue-router';
    import router from '../router';

    function checkAuth(values){
        if(values.login == window.auth.login && values.password == window.auth.password){
            localStorage.setItem('auth', JSON.stringify(true));
            router.push({path: '/admin'});
        }
    }

    function validateLogin(value) {
      // if the field is empty
      if (!value) {
        return 'Обязательное поле!';
      }
      
      const regex = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/;
      if (!regex.test(value)) {
        return 'Должно содержать верный формат';
      }
     
      return true;
    } 

    function validatePassword(value) {
        if (!value) {
            return 'Обязательное поле!';
        }

        return true;
    }

</script>

<style lang="scss">
    @import '../assets/auth.scss';
</style>