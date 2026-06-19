import React from 'react';

export interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Card({ title, description, children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      {title && (
        <h3 className="mb-1 text-lg font-semibold text-gray-900">{title}</h3>
      )}
      {description && (
        <p className="mb-4 text-sm text-gray-500">{description}</p>
      )}
      {children}
    </div>
  );
}
