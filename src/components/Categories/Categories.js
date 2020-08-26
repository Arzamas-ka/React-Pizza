import React from 'react';
import { PropTypes } from 'prop-types';
import { CategoriesData } from '../../helpers/data';

const Categories = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>
        {CategoriesData.map((kind) => (
          <li
            key={kind.id}
            className={activeCategory === kind.id ? 'active' : ''}
            onClick={() => onSelectCategory(kind.id)}
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
  onSelectCategory: PropTypes.func,
};

Categories.defaultProps = { activeCategory: null };

export default Categories;
