<template>
  <main id="app">
    <div>{{ title }}</div>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Hello World!");
</script>

<style lang="scss" scoped></style>
