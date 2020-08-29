import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/pizza-logo.svg';
import { Cart } from '../../helpers/svg';
import { Button } from '../../components';
import { useSelector } from 'react-redux';

const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img width='38' src={logoImg} alt='Pizza logo' />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className='header__cart'>
          <Link to='/cart'>
            <Button className={'button--cart'}>
              <span>{totalPrice} ₽</span>
              <div className='button__delimiter'></div>
              <Cart />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
