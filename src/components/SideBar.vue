<template>
    <div class="sidebar">
        <h2>barra lateral</h2>
        <ul>
            <li><RouterLink to="/contador">Contador</RouterLink></li>
            <li><RouterLink to="/tareas">Tareas</RouterLink></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .sidebar {
        width: 250px;
        background-color: #f4f4f4;
        padding: 20px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    }
</style>