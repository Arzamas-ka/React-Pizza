import React from 'react';
import logoImg from '../../assets/images/pizza-logo.svg';
import { Cart } from '../../helpers/svg';
import { Button } from '../../components';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <img width='38' src={logoImg} alt='Pizza logo' />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className='header__cart'>
          <Button className={'button--cart'}>
            <span>520 ₽</span>
            <div className='button__delimiter'></div>
            <Cart />
            <span>3</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
