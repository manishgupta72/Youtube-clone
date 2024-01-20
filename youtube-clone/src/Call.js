import React from 'react'
const axios = require('axios');
const Call = async() => {
  

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '4e6b188005mshb8edc807816766cp16da39jsn995a11f9fd09',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
  return (
    <div>Call</div>
  )
}

export default Call