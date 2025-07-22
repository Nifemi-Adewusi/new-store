/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
const className =
  "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:text-stone-800 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5";
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
    <button onClick={click} className={className}>
      {children}
    </button>
  );
}
