import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import "./styles.scss";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />

          <Route path="/beers/:beerId" element={<SingleBeer />} />


          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
