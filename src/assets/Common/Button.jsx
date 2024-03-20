/* eslint-disable react/prop-types */

const Button = ({ text }) => {
  return (
    <div className="pr-button cursor-pointer ">
      <span>{text}</span>
    </div>
  );
};

export default Button;
