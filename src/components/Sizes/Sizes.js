import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SizesPizza } from '../../helpers/data';

const Sizes = ({ sizes }) => {
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const handleActiveType = (index) => {
    setActiveSize(index);
  };

  return (
    <>
      {SizesPizza.map((size, index) => (
        <li
          key={size}
          className={classNames({
            active: activeSize === index,
            disabled: !sizes.includes(size),
          })}
          onClick={() => handleActiveType(index)}
        >
          {`${size} см.`}
        </li>
      ))}
    </>
  );
};

Sizes.propTypes = {
  sizes: PropTypes.array,
};

export default Sizes;
