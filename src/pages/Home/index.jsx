import React, { useEffect, useCallback } from "react";
import { SearchWidget, PaginationWidget } from "./components/";
import { POAPCard } from "./../../components";
import { useSelector, useDispatch } from "react-redux";
import { helpers } from "./../../utils";
import { actions } from "./../../redux";

const { fetchPoaps } = helpers;

const Home = () => {
  const { data, next, page, prev, keyword } = useSelector(
    (state) => state?.poaps
  );

  const dispatch = useDispatch();

  const fetchPoapsOnLoad = useCallback(() => {
    fetchPoaps({ dispatch, action: actions.PoapAdded });
  }, []);

  const nextPage = useCallback(() => {
    const newPage = page + 1;
    console.log(newPage);

    fetchPoaps({ dispatch, action: actions.PoapAdded, page: newPage, keyword });
  }, [keyword, page]);

  const prevPage = useCallback(() => {
    const newPage = page - 1;
    fetchPoaps({ dispatch, action: actions.PoapAdded, page: newPage, keyword });

  }, [keyword, page]);

  useEffect(() => {
    fetchPoapsOnLoad();
  }, []);

  function POAPCards() {
    return (
      <div className="p-5">
        <div className="row">
          {data?.map((poap) => (
            <POAPCard key={poap.id} data={poap} />
          ))}
        </div>
      </div>
    );
  }

  function EmptyDataCard() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 text-center default-page">
            <div className="card border-0 text-center d-block">
              <img
                src="https://via.placeholder.com/200x250.png"
                alt="icon"
                className="w200 mb-4 ml-auto mr-auto "
              />
              <h1 className="fw-700 text-grey-900 display4-size display4-md-size">
                Oops! It looks like you're lost.
              </h1>
              <p className="text-grey-500 font-xss">
                It seems we don't such record. Try to search again or use the go
                to.
              </p>
              <a
                href="/"
                className="p-3 w175 bg-current text-white d-inline-block text-center fw-600 font-xssss rounded-lg text-uppercase ls-3"
              >
                Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <SearchWidget />
      {data?.length > 0 ? (
        <h2 className="ml-5 fw-400 font-lg">
          Events <b>POAP</b> <i className="feather-edit text-grey-500 font-xs"></i>
        </h2>
      ) : (
        ""
      )}

      {data?.length > 0 ? <POAPCards /> : <EmptyDataCard />}
      <PaginationWidget
        nextPage={nextPage}
        prevPage={prevPage}
        next={next}
        prev={prev}
      />
    </React.Fragment>
  );
};

export default Home;
