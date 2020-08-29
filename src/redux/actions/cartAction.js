import { ADD_PIZZA_CART } from './const';

export const addPizzaToCart = (pizza) => ({
  type: ADD_PIZZA_CART,
  payload: pizza,
});
 