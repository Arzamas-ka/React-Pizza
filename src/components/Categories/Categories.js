import React from 'react';
import { CategoriesData } from '../../helpers/data';

const Categories = () => {
  return (
    <div className='categories'>
      <ul>
        {CategoriesData.map((kind) => (
          <li key={kind.id}>{kind.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
