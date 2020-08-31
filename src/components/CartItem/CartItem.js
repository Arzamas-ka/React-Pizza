import React from 'react';

import Button from '../Button/Button';
import { Decrement, Increment, Delete } from '../../helpers/svg.js';

const CartItem = ({
  id,
  name,
  type,
  size,
  imageUrl,
  totalPrice,
  totalCount,
  onRemove,
  onMinusItem,
  onPlusItem,
}) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlusItem(id);
  };

  const handleMinusItem = () => {
    onMinusItem(id);
  };

  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      </div>
      <div className='cart__item-info'>
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className='cart__item-count'>
        <div
          onClick={handleMinusItem}
          className='button button--outline button--circle cart__item-count-minus'
        >
          <Decrement />
        </div>
        <span>{totalCount}</span>
        <div
          onClick={handlePlusItem}
          className='button button--outline button--circle cart__item-count-plus'
        >
          <Increment />
        </div>
      </div>
      <div className='cart__item-price'>
        <span>{totalPrice} ₽</span>
      </div>
      <div className='cart__item-remove'>
        <Button onClick={handleRemoveClick} className='button--circle' outline>
          <Delete />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
