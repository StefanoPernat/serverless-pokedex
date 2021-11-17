<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #08030f;
  text-align: center;
}
</style>
