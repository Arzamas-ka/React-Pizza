import React from 'react';
import { PizzaData } from '../../helpers/data';
import { Plus } from '../../helpers/svg';

export const Pizza = () => {
  return (
    <>
      {PizzaData.map((pizza) => (
        <div key={pizza.id} className='pizza-block'>
          <img className='pizza-block__image' src={pizza.image} alt='Pizza' />
          <h4 className='pizza-block__title'>{pizza.title}</h4>
          <div className='pizza-block__selector'>
            <ul>
              <li className='active'>тонкое</li>
              <li>традиционное</li>
            </ul>
            <ul>
              <li className='active'>26 см.</li>
              <li>30 см.</li>
              <li>40 см.</li>
            </ul>
          </div>
          <div className='pizza-block__bottom'>
            <div className='pizza-block__price'>{`от ${pizza.price} ₽`}</div>
            <div className='button button--outline button--add'>
              <Plus />
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pizza;
