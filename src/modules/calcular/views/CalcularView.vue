<template>
    <h3>Propiedades computadas</h3>
    <input type="text" v-model="valor">
    {{ resultado }}
    <ResultadoSection v-if="mostrarElemento" :resultado="resultado"/>

    <div v-else-if="isNaN(valor)">debe ser un numero para calcular</div>

    <div v-else>
        aqui no se muestra nada
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import ResultadoSection from '../components/ResultadoSection.vue';

    const valor = ref('');
    const resultado = computed(() => {
        return valor.value * 3;
    });

    const mostrarElemento = computed(() => {
        return valor.value > 10;
    });

</script>

<style scoped>

</style>