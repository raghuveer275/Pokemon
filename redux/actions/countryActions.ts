import axios from 'axios'
import { Dispatch } from 'redux'

const getCountry = (country: string, navigate: Function) => (dispatch: Dispatch) => {
  return (
    axios
      .get('https://restcountries.eu/rest/v2/name/' + country)
      .then((res: any) => {
        // alert(JSON.stringify(res.data[0], null, 4))
        dispatch({
          type: "GET_COUNTRY",
          country: res.data[0]
        })
        navigate('CountryView')
      })
      .catch((err: any) => {
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  )
}

const getWeather = (weather: string) => (dispatch: Dispatch) => {
  return (
    axios
      .get('http://api.weatherstack.com/current?access_key=796c1bb6ac1987e064d4625e0a9227fd&query=' + weather)
      .then((res: any) => {
        dispatch({
          type: "GET_WEATHER",
          weather: res.data
        })
      })
      .catch((err: any) => {
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  )
}

export { getCountry, getWeather }