<template>
  <nav class="navbar">
    <span class="logo"></span>
    <span><router-link :to="{ name: 'Home' }">Home</router-link></span>
  </nav>
</template>

<script setup></script>

<style>
.navbar {
  padding: 1em;
  display: flex;
  justify-content: flex-start;
}

.navbar span:not(.logo) {
  align-self: center;
}

.logo {
  flex-grow: 1;
  display: block;
  background: url('@/assets/pokeapi.png') no-repeat;
  background-size: 3em;
}

span {
  display: block;
  text-transform: uppercase;
  font-size: 0.6em;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
}

nav span a {
  text-decoration: none;
}

nav span a:hover {
  border-bottom: 1px solid #f6cb4b;
}

nav span a:visited {
  color: #08030f;
}
</style>
