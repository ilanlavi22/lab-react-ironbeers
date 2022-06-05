import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SingleBeer = () => {
  const params = useParams();
  const { beerId } = params;

  const [beer, setBeer] = useState(null);

  const url = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

  const fetchBeer = () => {
    const response = axios(url)
      .then((response) => {
        const data = response.data;
        setBeer(data);
      })
      .catch((error) => {
        console.log(error.response);
      })
  };

  useEffect(() => {
    fetchBeer();
  }, [beerId]);



  if (!beer) {
    console.log("nothing is the array");
  } else {

  }

  return (
    <div>

      <div>
        <img src={beer.image_url} alt={beer.name} />
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
    </div>
  )
}

export default SingleBeer;