import React from "react";

import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

export default function PaginationWidget({ next, prev, nextPage, prevPage }) {
  return (
    <div className="col-lg-12">
      <ul className="pagination justify-content-center d-flex pt-5 mb-5">
        {prev ? <PrevButton prevPage={prevPage} /> : null}
        {next ? <NextButton nextPage={nextPage} /> : null}
      </ul>
    </div>
  );
}
