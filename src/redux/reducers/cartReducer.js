import {
  SET_TOTAL_PRICE,
  SET_TOTAL_COUNT,
  ADD_PIZZA_CART,
} from '../actions/const';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case ADD_PIZZA_CART:
      return {
        ...state,
        items: {
          [action.payload.id]: [
            ...state.items[action.payload.id],
            action.payload,
          ],
        },
      };
    default:
      return state;
  }
}; 

export default cartReducer;
