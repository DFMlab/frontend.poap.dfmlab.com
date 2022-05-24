import React from "react";

import { EVENT_TYPE } from './../utils/constants'

function POAPCard({ data }) {

  return (
    <div className="col-xl-4 col-xxxl-3 col-lg-6 col-md-6 col-sm-6 mb-4">
      <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
        <div className="card-image w-100 mb-3">
          <a
            href="default-course-details.html"
            className="video-bttn position-relative d-block"
          >
            <img
              src={data?.media}
              alt="poap"
              className="w-100"
            />
          </a>
        </div>
        <div className="card-body pt-0">
          <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-primary d-inline-block text-primary mr-1">
            { EVENT_TYPE[data.event_type] }
          </span>

          <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-primary d-inline-block text-primary mr-1">
             { data?.start_time }
          </span>

          <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-primary d-inline-block text-primary mr-1">
             { data?.organizer }
          </span>

        
          <h3 className="fw-700 font-xs mt-3 lh-28 mt-0">
            <a
              href="default-course-details.html"
              className="text-dark text-grey-900"
            >
             { data?.title}
            </a>
          </h3>
          <p>{data?.description ? data?.description : 'lorem lorem ipsum ipsum dolor dolor'}</p>
          <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"><span>Organizer:</span> { data?.organizer } </h6>
        </div>
      </div>
    </div>
  );
}


export default POAPCard