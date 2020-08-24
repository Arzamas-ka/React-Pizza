import React, { useState, useEffect, useRef } from 'react';
import { ArrowTop } from '../../helpers/svg';
import { SortsData } from '../../helpers/data';

const Sort = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [active, setActive] = useState(0);
  const sortRef = useRef(null);
  const activeLabel = SortsData[active].name;

  const onVisiblePopup = () => {
    setVisiblePopup((visiblePopup) => !visiblePopup);
  };

  const onActiveItem = (id) => {
    setActive(id);
    setVisiblePopup(false);
  };

  const handleOutsideClick = (event) => {
    if (!event.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
  }, []);

  const rotateArrow = visiblePopup ? 'rotated' : '';

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        <ArrowTop rotateArrow={rotateArrow} />
        <b>Сортировка по:</b>
        <span onClick={onVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className='sort__popup'>
          <ul>
            {SortsData.map((item) => (
              <li
                key={item.id}
                className={active === item.id ? 'active' : ''}
                onClick={() => onActiveItem(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
