import React from "react";

export default function Input({
  type,
  name,
  label,
  placeholder,
  required,
  customStyle,
  onChange,
}) {
  return (
    <div className={customStyle}>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="rounded-lg appearance-none font-light border border-gray-300 w-full py-3 px-4 text-gray-700 placeholder-gray-400 text-md focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent mt-2"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}
