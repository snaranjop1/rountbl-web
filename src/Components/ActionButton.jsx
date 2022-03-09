import React from "react";

export default function ActionButton({ label, type, customStyle }) {
  return (
    <button
      type={type}
      className={`w-full flex justify-center py-3 px-4 border border-transparent text-md font-medium rounded-md text-white bg-purple-800 hover:bg-purple-700 ${customStyle}`}
    >
      {label}
    </button>
  );
}
