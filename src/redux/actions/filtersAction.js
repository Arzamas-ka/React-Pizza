import  { SET_SORT_BY, SET_CATEGORY_BY } from '../actions/const';

export const setSortBy = (sortName) => ({
  type: SET_SORT_BY,
  payload: sortName,
});

export const setCategory = (categoryIndex) => ({
  type: SET_CATEGORY_BY,
  payload: categoryIndex,
});
