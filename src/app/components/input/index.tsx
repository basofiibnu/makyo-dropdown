import React, { Dispatch, SetStateAction } from 'react';

type InputProps = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  className?: string;
};

// Input Component
export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className="w-full flex items-center gap-1 px-4">
      <img src="/search.svg" alt="search" className="w-4" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`border-none border-gray-300 p-2 focus:outline-none text-xs ${className}`}
      />
      <img
        src="/closecircle.svg"
        alt="close"
        className="w-4 cursor-pointer"
        onClick={() => onChange('')}
      />
    </div>
  );
};
