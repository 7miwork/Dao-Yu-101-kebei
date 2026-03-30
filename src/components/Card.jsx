import React from 'react';

export default function Card({ title, children, className = '', gradient = false, hover = true }) {
  const baseClasses = "bg-white rounded-xl shadow-sm border border-gray-200 p-6";
  const hoverClasses = hover ? "hover:shadow-md transition-shadow cursor-pointer" : "";
  const gradientClasses = gradient ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200" : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div>{children}</div>
    </div>
  );
}