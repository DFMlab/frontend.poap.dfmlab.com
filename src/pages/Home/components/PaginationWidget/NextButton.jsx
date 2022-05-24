import React from "react";

export default function NextButton({ nextPage }) {
  return (
    <li className="page-item m-1">
      <button
        className="btn rounded-lg shadow-xss bg-primary text-white border-0"
        onClick={() => nextPage()}
      >
        Next <i className="ti-angle-right"></i>
      </button>
    </li>
  );
}
