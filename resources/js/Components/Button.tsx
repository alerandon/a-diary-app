import React from 'react';

export default function Button({
  type = 'submit',
  className = '',
  processing,
  children,
}) {
  return (
    <button
      type={type}
      className={
        `items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-lg text-white active:bg-gray-900 transition ease-in-out duration-150 ${
          processing && 'opacity-25'
        } ` + className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
