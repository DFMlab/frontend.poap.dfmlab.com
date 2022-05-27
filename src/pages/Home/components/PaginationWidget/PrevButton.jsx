import React from "react";

export default function PrevButton({ prevPage }) {
  return (
    <li className="page-item m-1">
      <button
        className="btn rounded-lg shadow-xss bg-primary text-white border-0"
        onClick={() => prevPage()}
      >
        <i className="ti-angle-left"></i> Previous
      </button>
    </li>
  );
}
