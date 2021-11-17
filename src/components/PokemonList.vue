<template>
  <div class="pokelist">
    <PokemonCard v-for="pokemon in list" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import PokemonCard from '@/components/PokemonCard.vue'

defineProps({
  list: {
    type: Array,
    required: true,
  },
})

//console.log(list)
</script>

<style>
.pokelist {
  margin: 0.5em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5em;
}
</style>
