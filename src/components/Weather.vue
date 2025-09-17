<template>
    {{ weatherStore.temperatura }}
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