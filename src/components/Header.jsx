import { Link } from "react-router-dom";
import { GiBeerStein } from 'react-icons/gi';

const Header = () => {
  return (

    <nav>
      <span className='icons' style={{ fontSize: '5rem', color: '#a5404a' }}><GiBeerStein /></span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">All Beers</Link>
        </li>
        <li>
          <Link to="beers/random-beer">Random Beer</Link>
        </li>
        <li>
          <Link to="beers/new-beer">New Beer</Link>
        </li>
      </ul>
    </nav>

  );
}

export default Header;