/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom'
function Button({ disabled, children, type, to, click }) {
  const navigate = useNavigate();
  if (to) {
    return (
      <button
        onClick={() => navigate(to)}
        className={`${type === "small" ? "text-xs px-4 py-3" : ""} bg-yellow-400 font-semibold text-sm text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-8 md:py-4`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={click}
      className={`${type === "small" ? "text-xs px-4 py-3" : ""} bg-yellow-400 font-semibold text-sm text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-8 md:py-4`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

export function ButtonSecondary({ children, click }) {
  return (
    <button
      onClick={click}
      className="bg-stone-50 text-stone-800 hover:bg-stone-200 transition-colors  duration-300 focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-2 rounded-full py-2 px-4 text-sm font-semibold uppercase"
    >
      {children}
    </button>
  );
}
