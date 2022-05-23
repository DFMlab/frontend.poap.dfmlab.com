import React from "react";

function POAPCard() {
  return (
    <div class="col-xl-4 col-xxxl-3 col-lg-6 col-md-6 col-sm-6 mb-4">
      <div class="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
        <div class="card-image w-100 mb-3">
          <a
            href="default-course-details.html"
            class="video-bttn position-relative d-block"
          >
            <img
              src="https://via.placeholder.com/400x300.png"
              alt="poap"
              class="w-100"
            />
          </a>
        </div>
        <div class="card-body pt-0">
          <span class="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
            Python
          </span>
          <span class="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
            <span class="font-xsssss">$</span> 240
          </span>
          <h4 class="fw-700 font-xss mt-3 lh-28 mt-0">
            <a
              href="default-course-details.html"
              class="text-dark text-grey-900"
            >
              Complete Python Bootcamp From Zero to Hero in Python{" "}
            </a>
          </h4>
          <h6 class="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 32 Lesson </h6>
        </div>
      </div>
    </div>
  );
}


export default POAPCard