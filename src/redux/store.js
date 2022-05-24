import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/";

const store = configureStore(
    {
        reducer: reducers
    }
);

store.subscribe(() => {
    console.log(store.getState());
});

export default store
