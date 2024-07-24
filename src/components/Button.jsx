// src/components/Button.jsx

import React from "react";
import PropTypes from "prop-types";

const Button = ({
  variant = "primary",
  size = "large",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "rounded-[4px] font-medium focus:outline-none focus:ring-2 focus:ring-opacity-75 inline-flex items-center justify-center box-border";
  
  const variantClasses = {
    primary:
      "bg-black  text-white text-[18px]  hover:bg-[#222] focus:ring-[#555]",
    secondary: "bg-black text-white hover:bg-[#222] focus:ring-[#555]",
    // danger: "bg-red-500 text-white hover:bg-red-700 focus:ring-red-400",
  };

  const sizeClasses = {
    large: "w-[180px] h-[60px] text-base py-2 px-4", // 180px x 60px
    medium: "w-[160px] h-[61px] text-base py-2 px-4", // 160px x 61px
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["large", "medium"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
