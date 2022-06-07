import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  const url = 'https://ih-beers-api2.herokuapp.com/beers/random';

  const fetchBeer = () => {
    const response = axios(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setBeer(data);
      })
      .catch((error) => {
        console.log(error.response);
      })
  };

  useEffect(() => {
    fetchBeer();
  }, []);

  if (!beer) {
    console.log("nothing is the array");
  } else {

  }
  return (
    <div>
      {beer && (

        <div>
          <div>
            <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
            </div>
            <div>
              <p>{beer.attenuation_level}</p>
              <p>{beer.first_brewed}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RandomBeer;