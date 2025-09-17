<template>
  <h1>hola mundo</h1>
  <p>{{ contador }}</p>
  <button @click="incrementar">incrementar</button>
  <button @click="decrementar">decrementar</button>
</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0);

const incrementar = () => {
  contador.value++;
};

const decrementar = () => {
  contador.value--;
};

</script>

<style scoped>
h1 {
  color: blue;
}

p {
  font-size: 2em;
}

button {
  margin: 0 5px;
  padding: 10px 15px;
  font-size: 1em;
  cursor: pointer;
}
button:hover {
  background-color: #f0f0f0;
}
</style>
