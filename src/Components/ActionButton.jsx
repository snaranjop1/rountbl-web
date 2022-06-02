import React from "react";
import LoadingIcon from "../Assets/LoadingIcon";

export default function ActionButton({ label, type, customStyle, loading }) {
  return (
    <button
      type={type}
      className={`w-full flex justify-center py-3 px-4 border border-transparent text-md font-medium rounded-md text-white bg-purple-800 hover:bg-purple-700 ${customStyle}`}
    >
      {loading ? <LoadingIcon /> : label}
    </button>
  );
}
