<template>
    <div>{{ title }}</div>
    <router-view></router-view>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const title = ref('Hello World!')
</script>

<style lang='scss' scoped>
</style>