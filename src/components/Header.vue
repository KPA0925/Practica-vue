<template>
    <div class="header">
        {{ mensajeRecibido }}
        <Weather />
    </div>
</template>

<script setup>
import Weather from './Weather.vue';
import { defineProps } from 'vue';
import { ref, watch } from 'vue';

const props = defineProps(['mensaje']);
const mensajeRecibido = ref(props.mensaje);

watch(() => props.mensaje, (nuevoMensaje) => {
    mensajeRecibido.value = nuevoMensaje;
});

</script>

<style scoped>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        top: 0;
        left: 0;
        right: 0;
        background-color: #333;
        color: white;
    }
    h1 {
        margin: 0;
    }
</style>
