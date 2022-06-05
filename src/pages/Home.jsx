import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Link to='/beers'>
          <img src={beers} alt='All Beers' />
          <h3>All Beers</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint suscipit omnis inventore quisquam nulla at, fuga deleniti in quae amet. Sint suscipit omnis.</p>
        </Link>
      </div>

      <div className="hero">
        <Link to='/random-beer'>
          <img src={randomBeer} alt='All Beers' />
          <h3>Random Beer</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint suscipit omnis inventore quisquam nulla at, fuga deleniti in quae amet. Sint suscipit omnis.</p>
        </Link>
      </div>

      <div className="hero">
        <Link to='/new-beer'>
          <img src={newBeer} alt='All Beers' />
          <h3>New Beer</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint suscipit omnis inventore quisquam nulla at, fuga deleniti in quae amet. Sint suscipit omnis.</p>
        </Link>
      </div>

    </div>
  );
}

export default Home;