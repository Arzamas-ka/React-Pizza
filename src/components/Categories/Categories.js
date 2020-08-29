import React from 'react';
import { PropTypes } from 'prop-types';
import { CategoriesData } from '../../helpers/data';

const Categories = ({ activeCategory, onClickCategory }) => {
  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {CategoriesData &&
          CategoriesData.map((kind, index) => (
            <li
              key={kind.id}
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
            >
              {kind.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  activeCategory: PropTypes.number,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = { activeCategory: null };

export default Categories;
