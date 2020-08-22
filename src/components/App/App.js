import React from 'react';
import Header from '../Header/Header';
import { Sort } from '../../components';
import { Categories } from '../../components';
import { Pizza } from '../../components';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            <Pizza />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
