/* eslint-disable react/prop-types */
function Button({ disabled, children }) {
  return (
    <button
      className="bg-yellow-400 font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-8 md:py-4"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
