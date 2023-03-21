export const initialState = {
  basket: [],
  user:null
};

//selector
export const getbasketTotalAmount = (basket) => {
  return basket?.reduce((amount, card) => +card.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_PRODUCT":
      const index = state.basket.findIndex((items) => items.id === action.id);
      let newbasket = [...state.basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn("try to delete which is not present in cart");
      }
      return {
        ...state,
        basket: newbasket,
      };
    case "SET_USER":
      return {
        ...state,
        user:action.user
      }
    default:
      return state;
  }
};

export default reducer;
