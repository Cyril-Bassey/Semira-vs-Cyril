import React from 'react';

const Button = ({ label, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick} 
      className={`rounded-full bg-[#FF5E00] text-white px-4 py-2 mt-4 text-sm font-bold ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
