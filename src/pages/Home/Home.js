import React from 'react';
import PropTypes from 'prop-types';
import { Categories, Sort, Pizza } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/actions/filtersAction';

const Home = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories onClickItem={onSelectCategory} />
        <Sort />  
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        <Pizza pizzas={items} />
      </div>
    </div>
  );
};

Home.propTypes = {
  pizzas: PropTypes.array,
};

Home.defaultProps = { types: [] };

export default Home;
