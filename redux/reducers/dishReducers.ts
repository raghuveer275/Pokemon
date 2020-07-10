const initialState = {
  dishes: [],
  detail: {},
  bgrdImage: ''
}

const dishReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_DISHES": 
      return {
        ...state,
        dishes: action.dishes
      }
    case "GET_DISH_DETAIL": 
      return {
        ...state,
        detail: action.detail,
        bgrdImage: action.detail.Images[0].image
      }
    default: 
      return {
        ...state
      }
  }
}

export default dishReducer
