import React from "react";

export const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4">
      <div
        className="bg-blue-500 h-4 rounded-full transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
