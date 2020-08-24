import React, { useState } from 'react';
import { CategoriesData } from '../../helpers/data';

const Categories = () => {
  const [active, setActive] = useState(null);

  const onActiveItem = (index) => {
    setActive(index);
  };

  return (
    <div className='categories'>
      <ul>
        <li
          className={active === null ? 'active' : ''}
          onClick={() => onActiveItem(null)}
        >
          Все
        </li>
        {CategoriesData.map((kind) => (
          <li
            key={kind.id}
            className={active === kind.id ? 'active' : ''}
            onClick={() => onActiveItem(kind.id)}
          >
            {kind.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
