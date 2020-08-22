import React from 'react';
import { ArrowTop } from '../../helpers/svg';

const Sort = () => {
  return (
    <div className='sort'>
      <div className='sort__label'>
        <ArrowTop />
        <b>Сортировка по:</b>
        <span>популярности</span>
      </div>
      <div className='sort__popup'>
        <ul>
          <li className='active'>популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
