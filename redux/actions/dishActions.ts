import axios from 'axios'
import { Dispatch } from 'redux'

const getDishes = () => (dispatch: Dispatch) => {
  return (
    axios
      .get(`https://api-next.pranaafood.com/v1/admin/get_dishes`, {
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMUEiLCJlbWFpbCI6ImFkbWluQHByYW5hYWZvb2QuY29tIiwicGhvbmUiOm51bGwsImxhbmd1YWdlIjoiZW5nbGlzaCIsInJvbGUiOiJhZG1pbiIsInRpbWUiOiI3LzEvMjAyMCwgNjowMjozNyBQTSIsImlhdCI6MTU5MzYwMTM1N30.Koe3cVeBeS4ki9RZybaRNq3F-17QOgcJHqzDi16crn8'}
      })
      .then(async (res: any) => {
        dispatch({
          type: "GET_DISHES",
          dishes: res.data.response.dishes
        })
      })
      .catch((err: any) => {
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  )
}

export { getDishes }