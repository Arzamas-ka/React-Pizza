import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Sizes } from '../../components';
import { Types } from '../../helpers/data';

const Type = ({ sizes, types }) => {
  const [activeType, setActiveType] = useState(types[0]);

  const handleActiveType = (index) => {
    setActiveType(index);
  };

  return (
    <div className='pizza-block__selector'>
      <ul>
        {Types.map((type, index) => (
          <li
            key={type}
            className={classNames({
              active: activeType === index,
              disabled: !types.includes(index),
            })}
            onClick={() => handleActiveType(index)}
          >
            {type}
          </li>
        ))}
      </ul>
      <ul>
        <Sizes sizes={sizes} />
      </ul>
    </div>
  );
};

Type.propTypes = {
  sizes: PropTypes.array,
  types: PropTypes.array,
};

export default Type;
