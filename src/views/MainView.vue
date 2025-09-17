<template>
    <Header />
    <div class="container">
        <SideBar />
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import SideBar from '../components/SideBar.vue';
import Header from '../components/Header.vue';

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