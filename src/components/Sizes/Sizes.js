import React, { useState } from 'react';
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
          {size}
        </li>
      ))}
    </>
  );
};

export default Sizes;
