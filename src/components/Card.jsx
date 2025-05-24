import React from 'react';

const Card = ({ title, description, icon, className = '', animate = true }) => {
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${animate ? 'hover:-translate-y-2' : ''} ${className}`}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-blue-800">{description}</p>
    </div>
  );
};

export default Card;