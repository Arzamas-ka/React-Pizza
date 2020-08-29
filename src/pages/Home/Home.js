import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Categories, Sort, PizzaList } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions/filtersAction';
import { fetchPizzas } from '../../redux/actions/pizzasAction';
import LoadingBlock from '../../components/Loading/Loading';
import { SortsData, CategoriesData } from '../../helpers/data';
import { ADD_PIZZA_CART } from '../../redux/actions/const';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, dispatch, sortBy]);

  const onClickCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: ADD_PIZZA_CART,
      payload: obj,
    });
  };

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onClickCategory={onClickCategory}
          items={CategoriesData}
        />
        <Sort
          activeSortType={sortBy.type}
          items={SortsData}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((obj) => (
              <PizzaList
                key={obj.id}
                onClickAddPizza={handleAddPizzaToCart}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
};

Home.propTypes = {
  pizzas: PropTypes.array,
};

Home.defaultProps = { types: [] };

export default Home;
