<template>
  <div>
    <div>home</div>
    <button @click="goToAbout">go to about</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router/composables";
const router = useRouter();
const goToAbout = () => {
  console.warn("router", router);
  router.push({ path: "/about" });
};
</script>

<style scoped></style>
