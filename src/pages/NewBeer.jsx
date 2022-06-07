import { useState, useEffect } from 'react';
import axios from 'axios';

const NewBeer = () => {
  const [beer, setBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: Number,
    contributed_by: ''
  });
  const handleChange = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setBeer({ ...beer, [inputName]: inputValue })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBeer(beer);

    const response = axios({
      method: 'post',
      url: 'https://ih-beers-api2.herokuapp.com/beers/new',
      data: beer

    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      })

  }







  return (
    <form className="addForm">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="name"
        value={beer.name}
        onChange={handleChange}
      />
      <input
        type="text"
        id="tagline"
        name="tagline"
        placeholder="tagline"
        value={beer.tagline}
        onChange={handleChange}
      />
      <textarea
        id="description"
        name="description"
        placeholder="description"
        value={beer.description}
        onChange={handleChange}
      />
      <input
        type="text"
        id="first_brewed"
        name="first_brewed"
        placeholder="first_brewed"
        value={beer.first_brewed}
        onChange={handleChange}
      />
      <input
        type="text"
        id="brewers_tips"
        name="brewers_tips"
        placeholder="brewers_tips"
        value={beer.brewers_tips}
        onChange={handleChange}
      />
      <input
        type="text"
        id="attenuation_level"
        name="attenuation_level"
        placeholder="attenuation_level"
        value={beer.attenuation_level}
        onChange={handleChange}
      />
      <input
        type="text"
        id="contributed_by"
        name="contributed_by"
        placeholder="contributed_by"
        value={beer.contributed_by}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default NewBeer;
