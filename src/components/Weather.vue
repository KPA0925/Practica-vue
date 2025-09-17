<template>
    <h3>La temperatura actual es: {{ weatherStore.temperatura }}°</h3>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weatherStore";
import { onMounted } from "vue";
import { useWeather } from "@/composables/useWeather";

const weatherStore = useWeatherStore();

onMounted(() => {
    useWeather();
});
</script>

<style scoped>

</style>