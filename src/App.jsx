import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Header from './components/Header';
import "./styles.scss";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header></Header>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:beerId" element={<SingleBeer />} />
          <Route path="/beers/random-beer" element={<RandomBeer />} />
          <Route path="/beers/new-beer" element={<NewBeer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
