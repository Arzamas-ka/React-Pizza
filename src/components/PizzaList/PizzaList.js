import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Plus } from '../../helpers/svg';
import Button from '../Button/Button';
import classNames from 'classnames';

export const PizzaList = ({
  id,
  name,
  imageUrl,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
}) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      <h4 className='pizza-block__title'>{name}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} ₽</div>
        <Button onClick={onAddPizza} className='button--add' outline>
          <Plus />
          <span>Добавить</span>
          {addedCount && <span>{addedCount}</span>}
        </Button>
      </div>
    </div>
  );
};

PizzaList.propTypes = {
  onAddPizza: PropTypes.func,
};

export default PizzaList;
