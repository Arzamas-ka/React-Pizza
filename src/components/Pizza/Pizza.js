import React from 'react';
import { Plus } from '../../helpers/svg';
import { Type } from '../../components';

export const Pizza = ({ pizzas }) => {
  return (
    <>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className='pizza-block'>
          <img
            className='pizza-block__image'
            src={pizza.imageUrl}
            alt='Pizza'
          />
          <h4 className='pizza-block__title'>{pizza.title}</h4>
          <Type sizes={pizza.sizes} types={pizza.types} />
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
