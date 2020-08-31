import { SET_SORT_BY, SET_CATEGORY_BY } from '../actions/const';

export const setSortBy = ({ type, order }) => ({
  type: SET_SORT_BY,
  payload: { type, order },
});

export const setCategory = (categoryIndex) => ({
  type: SET_CATEGORY_BY,
  payload: categoryIndex,
});
