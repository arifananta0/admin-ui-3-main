import React from "react";

const Card = ({ title, children, className, variant }) => {
  return (
    <div className={`card-container mb-6 ${variant}`}>
      {/* Title di luar kotak card */}
      {title && <h2 className="text-lg text-gray-02 mb-4">{title}</h2>}
      {/* Card container */}
      <div className={`bg-white rounded-lg p-6 shadow-lg ${className} min-h-[320px]`}>
        {children}
      </div>
    </div>
  );
};

export default Card;