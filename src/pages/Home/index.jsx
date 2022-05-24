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
    fetchPoaps().then(async (result) => {
      dispatch({
        type: actions.INITIALIZE_POAP,
        payload: {
          data: result?.results,
          page: result?.results?.length > 0 ? 1 : 0,
          next: result.next ? true : false,
          prev: result.previous ? true : false,
          total: result.count,
          keyword: null,
        },
      });
    });
  }, []);

  const nextPage = useCallback(() => {
    const newPage = page + 1;
    console.log(newPage)
    fetchPoaps({ keyword, page: newPage }).then(async (result) => {
      dispatch({
        type: actions.INITIALIZE_POAP,
        payload: {
          data: result?.results,
          page: newPage,
          next: result.next ? true : false,
          prev: result.previous ? true : false,
          total: result.count,
          keyword: keyword,
        },
      });
    });
  }, [keyword, page]);

  const prevPage = useCallback(() => {
    const newPage = page - 1;
    fetchPoaps({ keyword, page: newPage }).then(async (result) => {
      dispatch({
        type: actions.INITIALIZE_POAP,
        payload: {
          data: result?.results,
          page: newPage,
          next: result.next ? true : false,
          prev: result.previous ? true : false,
          total: result.count,
          keyword: keyword,
        },
      });
    });
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

  return (
    <React.Fragment>
      <SearchWidget />
      <POAPCards />
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
