import React from 'react';
import Loader from './Loader';

const SubmitButton = ({ isLoading, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-slate-900 text-white w-[100px] h-[40px] rounded-xl ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={isLoading}
    >
      {isLoading ? "Submitting.....": text}
    </button>
  );
};

export default SubmitButton;
