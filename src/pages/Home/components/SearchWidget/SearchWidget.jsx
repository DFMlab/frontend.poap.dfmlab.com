import React, { useCallback, useState } from "react";
import "./SearchWidget.css";
import { useDispatch } from "react-redux";
import { helpers } from "./../../../../utils";
import { actions } from "./../../../../redux"

const SearchWidget = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState()

  const searchPoaps = useCallback((e) => {
    e.preventDefault()
    const { fetchPoaps } = helpers;
    fetchPoaps({keyword:keyword}).then(async (data) => {
      dispatch({
        type: actions.INITIALIZE_POAP,
        payload: {
          poaps: data.results,
        },
      });
    });
  }, [keyword]);

  return (
    <div className="col-lg-12 my-5 px-5">
      <div
        id="SearchWidget"
        className="card rounded-xxl p-lg--5 border-0 bg-no-repeat"
      >
        <div className="card-body w-100 p-4">
          <div className="form-group mt-3 p-3 border-light border p-2 bg-white rounded-lg">
            <div className="row">
              <div className="col-lg-9">
                <div className="form-group icon-input mb-0">
                  <i className="ti-search font-xs text-grey-400"></i>
                  <input
                    onChange={(e) => setKeyword(e.target.value)}
                    type="text"
                    className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500 bg-transparent"
                    placeholder="Search online courses.."
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <button
                onClick={(e) => searchPoaps(e)}
                  className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
            {" "}
            <b className="text-grey-800 text-dark">Popular Search :</b>{" "}
            Designer, Developer, PHP, HTML, CSS, SCSS{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
