<template>
    <main id="app">
        <div class="header"></div>
        <div class="content">
            <div>{{ title }}</div>
            <router-view />
        </div>
        <div class="footer"></div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Hello World!');
</script>

<style lang="less" scoped>
.header {
    background-color: #000;
    color: #fff;
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
}
.content {
    margin-top: 80px;
    margin-bottom: 80px;
}
.footer {
    background-color: #000;
    color: #fff;
    height: 80px;
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>
