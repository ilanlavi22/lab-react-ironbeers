import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const url = 'https://ih-beers-api2.herokuapp.com/beers';

const Beers = () => {

  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('');





  const fetchData = () => {

    const check = localStorage.getItem('beers');
    if (check) {
      setBeers(JSON.parse(check));
    } else {
      const response = axios(url)
        .then((response) => {
          const data = response.data
          localStorage.setItem('beers', JSON.stringify(data));
          setBeers(data);
        })
        .catch((error) => {
          console.log(error.response);
        })
    };
  }



  useEffect(() => {
    fetchData();
  }, []);

  if (beers.length < 0) {
    console.log("nothing is the array");
  }

  //const { _id, image, name, tagline, contributed_by } = beer

  return (
    <>
      {<input type='text' placeholder='Search ...' onChange={(e) => setQuery(e.target.value)} />}
      {beers.filter((beer) =>
        beer.name.toLowerCase().includes(query)
      ).map((beer) => (
        <div key={beer._id}>
          <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
        </div>
      ))}
    </>
  );
}
export default Beers;