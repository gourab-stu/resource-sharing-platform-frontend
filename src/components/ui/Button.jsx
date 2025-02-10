export function Button({ children, className = "", ...props }) {
  return (
    <button {...props} className={`bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out ${className}`}>
      {children}
    </button>
  );
}

export default Button;
