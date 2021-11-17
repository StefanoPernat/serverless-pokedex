<template>
  <div class="card">
    <img
      class="card-image"
      :src="pokemon.image"
      :alt="pokemon.name + ' image'"
    />
    <span class="card-name">{{ pokemon.name }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
})
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}

.card-image {
  height: 150px;
  width: 100%;
}

.card-name {
  padding: 1em;
  font-size: 14px;
}

.card img {
  object-fit: contain;
}
</style>
