import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`py-3 px-4 hover:scale-110  transition-all w-fit rounded-md bg-blue-gradient font-semibold ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
