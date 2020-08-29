import React from 'react';
import { Link } from 'react-router-dom';
import { Cart as CartImg, Trash, GoBack } from '../../helpers/svg';
import { Button } from '../../components';
import emptyCartImg from '../../assets/images/empty-cart.png';
import CartItem from '../../components/CartItem/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from '../../redux/actions/cartAction';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onClickOrder = () => {
    console.log('ВАШ ЗАКАЗ ГОТОВ ', items);
  };

  return (
    <div className='content'>
      <div className='container container--cart'>
        {totalCount ? (
          <div className='cart'>
            <div className='cart__top'>
              <h2 className='content__title'>
                <CartImg />
                Корзина
              </h2>
              <div className='cart__clear'>
                <Trash />
                <span onClick={onClearCart}>Очистить корзину</span>
              </div>
            </div>
            <div className='content__items'></div>
            <div className='cart__bottom'>
              <div className='cart__bottom-details'>
                <span>
                  Всего пицц: <span> {totalCount} шт.</span>
                </span>
                <span>
                  Сумма заказа: <span> {totalPrice} ₽</span>
                </span>
              </div>
              {addedPizzas.map((item) => (
                <CartItem
                  id={item.id}
                  key={item.name}
                  name={item.name}
                  type={item.type}
                  size={item.size}
                  imageUrl={item.imageUrl}
                  totalPrice={items[item.id].totalPrice}
                  totalCount={items[item.id].items.length}
                  onRemove={onRemoveItem}
                  onPlusItem={onPlusItem}
                  onMinusItem={onMinusItem}
                />
              ))}
              <div className='cart__bottom-buttons'>
                <Link
                  to='/'
                  className='button button--outline button--add go-back-btn'
                >
                  <GoBack />
                  <span>Вернуться назад</span>
                </Link>
                <Button onClick={onClickOrder} className='pay-btn'>
                  <span>Оплатить сейчас</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className='cart cart--empty'>
            <h2>
              Корзина пустая{' '}
              <span role='img' aria-label='smile'>
                😕
              </span>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCartImg} alt='Empty cart' />
            <Link to='/' className='button button--black'>
              <span>Вернуться назад</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
