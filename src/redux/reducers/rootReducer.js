import { combineReducers } from 'redux';

import filtersReducer from '../reducers/filtersReducer';
import pizzasReducer from '../reducers/pizzasReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
});

export default rootReducer;
