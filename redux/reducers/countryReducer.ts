const initialState = {
  country: {
    name: '',
    capital: '', 
    population: '',
    latlng: [],
    flag: ''
  },
  weather: {
    request: {},
    location: {},
    current: {}
  }
}

const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_COUNTRY": 
      return {
        ...state,
        country: action.country,
        weather: {}
      }
    case "GET_WEATHER": 
      return {
        ...state,
        weather: action.weather
      }
    default: 
      return {
        ...state
      }
  }
}

export default countryReducer
