import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Plus } from '../../helpers/svg';
import { Type } from '..
import Button from '../Button/Button';

export const PizzaList = ({ pizzas, onClickAddPizza }) => {
  const [activeType, setActiveType] = useState(pizzas.types[0]);
  const [activeSize, setActiveSize] = useState(pizzas.sizes[0]);

  // https://www.youtube.com/watch?v=IZVNNc8FHYg&list=PL0FGkDGJQjJFMRmP7wZ771m1Nx-m2_qXq&index=9&t=4218s
  const onAddPizza = () => {
    const { id, name, imageUrl, price } = pizzas;
    const cartPizzas = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      type: activeType,
    };
    onClickAddPizza({ id, name, imageUrl, price });
  };

  return (
    <>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className='pizza-block'>
          <img
            className='pizza-block__image'
            src={pizza.imageUrl}
            alt='Pizza'
          />
          <h4 className='pizza-block__title'>{pizza.name}</h4>
          <Type
            sizes={pizza.sizes}
            types={pizza.types}
            activeType={activeType}
            setActiveType={setActiveType}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
          <div className='pizza-block__bottom'>
            <div className='pizza-block__price'>{`от ${pizza.price} ₽`}</div>
            <Button
              className='button button--outline button--add'
              onClick={onAddPizza}
            >
              <Plus />
              <span>Добавить</span>
              <i>2</i>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

PizzaList.propTypes = {
  pizzas: PropTypes.array.isRequired,
  onAddPizza: PropTypes.func,
};

export default PizzaList;
