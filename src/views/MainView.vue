<template>
    <Header :mensaje="texto" />
    <div class="container">
        <SideBar />
        <div class="content">
            <input type="text" v-model="texto" />
            <p> {{ texto }}</p>
            <router-view />
        </div>
    </div>
</template>

<script setup>
import SideBar from '../components/SideBar.vue';
import Header from '../components/Header.vue';
import { ref } from 'vue';

const texto = ref('');

</script>

<style scoped>
    .container {
        display: flex;
    }
    .content {
        flex: 1;
        padding: 20px;
    }
</style>