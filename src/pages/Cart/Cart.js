import React from 'react';
import { Cart as CartImg, Trash, GoBack } from '../../helpers/svg';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import emptyCartImg from '../../assets/images/empty-cart.png';

const Cart = () => {
  return (
    <div className='content'>
      <div className='container container--cart'>
        <div className='cart'>
          <div className='cart__top'>
            <h2 className='content__title'>
              <CartImg />
              Корзина
            </h2>
            <div className='cart__clear'>
              <Trash />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className='content__items'></div>
          <div className='cart__bottom'>
            <div className='cart__bottom-details'>
              <span>
                Всего пицц: <b> шт.</b>
              </span>
              <span>
                Сумма заказа: <b> ₽</b>
              </span>
            </div>
            <div className='cart__bottom-buttons'>
              <Link
                to='/'
                className='button button--outline button--add go-back-btn'
              >
                <GoBack />

                <span>Вернуться назад</span>
              </Link>
              <Button className='pay-btn'>
                <span>Оплатить сейчас</span>
              </Button>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Cart;
