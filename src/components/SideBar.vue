<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <ul>
            <li><RouterLink to="/contador">Contador</RouterLink></li>
            <li><RouterLink to="/tareas">Tareas</RouterLink></li>
            <li><RouterLink to="/registro">Registro</RouterLink></li>
        </ul>
    </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
import { ref, watch } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre);
const email = ref(registrarStore.email);

watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue;
});

watch(() => registrarStore.email, (newValue) => {
    email.value = newValue;
});

</script>

<style scoped>
    .sidebar {
        width: 250px;
        background-color: #f4f4f4;
        padding: 20px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    }
</style>