const initialState = {
  pokemons: []
}

const pokeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_POKEMONS": 
      return {
        ...state,
        pokemons: action.pokemons
      }
    default: 
      return {
        ...state
      }
  }
}

export default pokeReducer
