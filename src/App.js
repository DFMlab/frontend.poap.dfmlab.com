import { Home } from "./pages";
import { Header } from './components'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
