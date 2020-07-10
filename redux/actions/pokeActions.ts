import axios from 'axios'
import { Dispatch } from 'redux'

const getPokemons = (limit: number) => (dispatch: Dispatch) => {
  return (
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`)
      .then(async (res: any) => {
        const pokemons = await Promise.all(res.data.results.map(async (poke: any) => await getPokemon(poke.url)))
        console.log(pokemons)
        dispatch({
          type: "GET_POKEMONS",
          pokemons: pokemons
        })
      })
      .catch((err: any) => {
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  )
}

const getPokemon = (url: string) => {
  return (
    axios
      .get(url)
      .then((res: any) => {
        return {
          name: res.data.name,
          url: res.data.sprites.front_default
        }
      })
      .catch((err: any) => {
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  )
}

export { getPokemons, getPokemon }