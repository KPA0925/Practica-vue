<template>
    <div>
        <h2>Formulario de Registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
                <ErrorMessage name="nombre" />
            </div>
            <div class="form">
                <label for="correo">Correo:</label>
                <Field type="email" name="correo" id="correo" placeholder="Ingrese su email" />
                <ErrorMessage name="correo" />
            </div>
            <button type="submit">Registrarse</button>
        </Form>
    </div>
</template>

<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { schema } from '../schemas/validationSchema';

    const onSubmit = () => {
        console.log('Formulario enviado');
    }
</script>

<style scoped>
.form {
    margin-bottom: 15px;
}
</style>