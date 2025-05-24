import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800',
    secondary: 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-50',
    outline: 'bg-transparent text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white',
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;