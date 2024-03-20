/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function ServiceItems({ serviceIcon, serviceText, onClick }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={ `pl-4 flex gap-2 items-center p-2 cursor-pointer ${hovered && 'bg-blue-500 text-white rounded-md px-2'}` }
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onClick={ handleClick }
    >
      <img className='w-5' src={ serviceIcon } alt='service png' />
      <div>{ serviceText }</div>
    </div>
  );
}