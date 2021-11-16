<template>
  <nav class="navbar">
    <span class="logo"></span>
    <span>Home</span>
    <div class="search">
      <span>Region</span>
      <input type="text" />
    </div>
  </nav>
</template>

<script setup></script>

<style>
.navbar {
  padding: 1em;
  display: flex;
  justify-content: space-between;
}

.navbar span:not(.logo) {
  align-self: center;
}

.search {
  flex-grow: 2;
}

.logo {
  display: block;
  background: url('@/assets/pokeapi.png') no-repeat;
  background-size: 3em;
}

.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  display: block;
  flex-grow: 1;
  text-transform: uppercase;
  font-size: 0.6em;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
}

.search input {
  flex-grow: 2;
  padding: 10px 6px;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>
