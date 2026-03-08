import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;