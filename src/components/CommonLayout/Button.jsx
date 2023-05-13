import React from "react";

const Button = ({ className, buttonContent }) => {
  return (
    <>
      <button className={className}>{buttonContent}</button>
    </>
  );
};

export default Button;
