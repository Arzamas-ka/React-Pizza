import { SET_CATEGORY_BY } from '../actions/const';

const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_BY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
