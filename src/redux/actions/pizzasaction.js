import { SET_PIZZAS } from './const';

const setPizzasAction = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

export default setPizzasAction;
