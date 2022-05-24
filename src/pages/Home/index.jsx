import React, { useEffect, useCallback } from "react";
import SearchWidget from "./components/";
import { POAPCard } from "./../../components";
import { useSelector, useDispatch } from "react-redux";
import { helpers } from "./../../utils";
import { actions } from "./../../redux";

const Home = () => {
  const poaps = useSelector((state) => state.poaps);

  const dispatch = useDispatch();

  const fetchPoapsOnLoad = useCallback(() => {
    const { fetchPoaps } = helpers;
    fetchPoaps().then(async (data) => {
      dispatch({
        type: actions.INITIALIZE_POAP,
        payload: {
          poaps: data.results,
        },
      });
      console.log(data);
    });
  }, []);

  useEffect(() => {
    fetchPoapsOnLoad();
  }, []);

  function POAPCards() {
    return (
      <div class="p-5">
        <div class="row">
          {poaps.map((poap) => (
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
    </React.Fragment>
  );
};

export default Home;
