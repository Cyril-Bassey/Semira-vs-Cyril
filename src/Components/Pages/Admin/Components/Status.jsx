import React, { useEffect, useState } from 'react';
// import './StatusMessage.css'; // Assuming you will add the CSS in a separate file

const StatusMessage = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Close the message after animation ends
    }, 3000); // Show the message for 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`status-message ${type} ${isVisible ? 'visible' : 'hidden'}`}>
      {message}
    </div>
  );
};

export default StatusMessage;
