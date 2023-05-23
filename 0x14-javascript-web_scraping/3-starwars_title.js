#!/usr/bin/node
const axios = require('axios');

function getMovieTitle(movieId) {
  const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
  return axios
    .get(url)
    .then(response => {
      return response.data.title;
    })
    .catch(error => {
      console.error(`Error retrieving movie data: ${error}`);
      return null;
    });
}

if (process.argv.length < 3) {
  console.log('Please provide the movie ID as an argument.');
  process.exit(1);
}

const movieId = process.argv[2];

getMovieTitle(movieId)
  .then(movieTitle => {
    if (movieTitle) {
      console.log(`The title of Episode ${movieId} is: ${movieTitle}`);
    } else {
      console.log(`No movie found with Episode ${movieId}.`);
    }
  })
  .catch(error => {
    console.error(`Error retrieving movie title: ${error}`);
  });
