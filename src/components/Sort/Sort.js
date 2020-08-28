import React, { useState, useEffect, useRef } from 'react';
import { ArrowTop } from '../../helpers/svg';
import { SortsData } from '../../helpers/data';

const Sort = ({ onSelectSortType, activeSortType }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef(null);
  const activeLabel = SortsData.find((elem) => elem.type === activeSortType)
    .name;

  const onVisiblePopup = () => {
    setVisiblePopup((visiblePopup) => !visiblePopup);
  };

  const onActiveItem = (index) => {
    onSelectSortType(index);
    setVisiblePopup(false);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
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
                className={activeSortType === item.type ? 'active' : ''}
                onClick={() => onActiveItem(item)}
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
