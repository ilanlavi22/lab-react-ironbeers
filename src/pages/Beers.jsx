import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'https://ih-beers-api2.herokuapp.com/beers';

const Beers = () => {

  const [beers, setBeers] = useState([]);

  const fetchData = () => {
    const response = axios(url)
      .then((response) => {
        const data = response.data
        setBeers(data);
      })
      .catch((error) => {
        console.log(error.response);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (beers.length < 0) {
    console.log("nothing is the array");
  }

  return (
    <>
      {beers.map((beer) => {
        const { _id, image, name, tagline, contributed_by } = beer
        return (
          <div key={_id}>
            <Link to={`/beers/${_id}`}>{name}</Link>
          </div>
        )

      })}
    </>
  );
}

export default Beers;