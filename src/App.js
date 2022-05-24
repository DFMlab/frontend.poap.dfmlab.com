import { Home } from "./pages";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
