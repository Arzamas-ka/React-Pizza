import { combineReducers } from 'redux';
import filtersReducer from '../reducers/filtersReducer';
import pizzasReducer from '../reducers/pizzasReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
