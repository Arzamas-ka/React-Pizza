import React from 'react';
import PropTypes from 'prop-types';
import { Categories, Sort, Pizza } from '../../components';

const Home = ({ pizzas }) => {
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        <Pizza pizzas={pizzas} />
      </div>
    </div>
  );
};

Home.propTypes = {
  pizzas: PropTypes.array,
};

Home.defaultProps = { types: [] };

export default Home;
