const axios = require('axios')

exports.handler = async function (event, context) {
  let pokemonApi = await axios.get('https://pokeapi.co/api/v2/pokedex/2/')
  let imageBaseUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

  let result = []
  if (pokemonApi.data.pokemon_entries) {
    pokemonApi.data.pokemon_entries.forEach((p) => {
      result.push({
        id: p.entry_number,
        name: p.pokemon_species.name,
        attrUrl: p.pokemon_species.url,
        image: `${imageBaseUrl}${p.entry_number
          .toString()
          .padStart(3, '0')}.png`,
      })
    })
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      count: result.length,
      data: result,
    }),
  }
}
