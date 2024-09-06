import React from 'react';
// import './Loader.; // Assuming you will add the CSS in a separate file

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="a11"><stop offset="0" stop-color="#FF6600" stop-opacity="0"></stop><stop offset="1" stop-color="#FF6600"></stop></linearGradient><circle fill="none" stroke="url(#a11)" stroke-width="15" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center"><animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform></circle></svg></div> {/* Loader animation */}
    </div>
  );
};

export default Loader;
