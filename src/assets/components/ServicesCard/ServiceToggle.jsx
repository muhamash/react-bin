/* eslint-disable react/prop-types */
export default function ServiceToggle({ text, isToggled, toggleButton }) {
  return (
    <div className="flex justify-between">
      <p className='text-sm font-mono'>{text}</p>
      <div>
        <button
          className={`${isToggled ? 'text-green-700' : 'text-red-700'}`}
          onClick={toggleButton}
        >
          {isToggled ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
}