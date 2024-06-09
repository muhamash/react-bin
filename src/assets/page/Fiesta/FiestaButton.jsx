/* eslint-disable react/prop-types */
import { useState } from 'react';

const getTypeColor = ( type ) =>
{
    const typeColors = {
        cartG: '#349B67',
        cart: '#C7675E',
        checkout: ' #4378FF',
        clear: 'transparent',
        default: '#6b7280',
    };
    return typeColors[ type ] || typeColors.default;
};

const getStateClass = (state) => {
  const stateClasses = {
    normal: 'opacity-100',
    disabled: 'opacity-50 cursor-not-allowed',
  };
  return stateClasses[state] || stateClasses.normal;
};

const getAdditionalClasses = (addClassName) => addClassName || '';

const FiestaButton = ({
  text = 'Button',
  type = 'default',
  state = 'normal',
  addClassName,
  dropdown = false,
  onClick,
  children,
  ...props
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleButtonClick = (e) => {
    if (state !== 'disabled') {
      onClick?.(e);
      if (dropdown) {
        setDropdownVisible(!dropdownVisible);
      }
    }
  }
  const bgColor = getTypeColor(type);
  const stateClass = getStateClass(state);
  const additionalClasses = getAdditionalClasses(addClassName);
  const filter = type !== 'clear' ? `drop-shadow(0px 3px 10px  ${bgColor})` : 'none';

  const buttonClass = `rounded-md  text-center ${stateClass} ${additionalClasses}`;

    return (
        <div className="relative inline-block">
            <button
                style={ { backgroundColor: bgColor, filter } }
                className={ buttonClass }
                onClick={ handleButtonClick }
                { ...props }
            >
                { text }
            </button>
            { dropdown && dropdownVisible && (
                <div className="absolute mt-2 bg-white border rounded drop-shadow-lg">
                    { children }
                </div>
            ) }
        </div>
    );
};

export default FiestaButton;
