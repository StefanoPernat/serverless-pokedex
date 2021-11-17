<template>
  <div class="content">
    <PokemonList :list="pokemonStore.pokemonList" />
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import axios from 'axios'

import PokemonList from '@/components/PokemonList.vue'

const pokemonStore = reactive({
  pokemonList: [],
})

onMounted(async () => {
  let result = await axios.get('/.netlify/functions/pokemon')
  if (result.data) {
    pokemonStore.pokemonList = result.data.data
  }
})

console.dir(pokemonStore)
</script>

<style>
.content {
  margin-top: 2em;
}
</style>
