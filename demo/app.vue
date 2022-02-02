<template>
  <div class="link-box">
    <router-link to="/">首页</router-link>
    <router-link v-for="(e, i) in examples" :key="i" :to="e.path">{{ e.name }}</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { routes } from './router.js';

const examples = ref([]);
for (let r of routes) {
  examples.value.push(r);
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
