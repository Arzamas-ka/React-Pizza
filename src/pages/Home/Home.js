import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Categories, Sort, Pizza } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions/filtersAction';
import { fetchPizzas } from '../../redux/actions/pizzasAction';
import LoadingBlock from '../../components/Loading/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    fetchPizzas(sortBy, category)(dispatch);
    // dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onSelectCategory={onSelectCategory}
        />
        <Sort
          activeSortType={sortBy.type}
          onSelectSortType={onSelectSortType}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded ? (
          <Pizza pizzas={items} />
        ) : (
          Array(10)
            .fill(0)
            .map((_, index) => <LoadingBlock key={index} />)
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  pizzas: PropTypes.array,
};

Home.defaultProps = { types: [] };

export default Home;
