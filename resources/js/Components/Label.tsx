import React from 'react';

export default function Label({ forInput, value, className, children }) {
  return (
    <label
      htmlFor={forInput}
      className={`block font-medium text-sm text-gray-800 ` + className}
    >
      {value ? value : children}
    </label>
  );
}
