import React, { useState, useEffect, useRef } from 'react';
import { ArrowTop } from '../../helpers/svg';
import { SortsData } from '../../helpers/data';

const Sort = ({ onSelectSortType, activeSortType }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef(null);
  const activeIndex = useRef(0);
  const activeLabel = SortsData[activeIndex.current].name;

  const onVisiblePopup = () => {
    setVisiblePopup((visiblePopup) => !visiblePopup);
  };

  const onActiveItem = (index) => {
    onSelectSortType(index);
    setVisiblePopup(false);
    activeIndex.current = index;
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
                className={activeSortType === item.id ? 'active' : ''}
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
