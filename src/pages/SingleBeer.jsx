import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const SingleBeer = () => {
  const params = useParams();
  const { beerId } = params;

  const [beer, setBeer] = useState(null);

  const url = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;



  const fetchBeer = () => {
    const response = axios(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
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

  return (
    <div>
      <h1>{beerId}</h1>
      {beer && (
        <div>
          {beer.image_url}
          {beer.name}
          {beer.tagline}
        </div>

      )}
    </div>
  )
}

export default SingleBeer;