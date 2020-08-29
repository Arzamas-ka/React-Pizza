import axios from 'axios';
import { SET_PIZZAS, SET_LOADED } from './const';

export const setLoaded = (value) => ({
  type: SET_LOADED,
  payload: value,
});

// этот action async так как он использует thunk
export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzasAction(data));
    })
    .catch((error) => console.log(error));
};

const setPizzasAction = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

export default setPizzasAction;
