import React from "react";

export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}
