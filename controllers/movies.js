const express = require('express');
const router = express.Router();
const axios = require('axios');

router
.get('/', (req, res) => {
  const popularMoviesURL = `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`;
  axios.get(popularMoviesURL)
  .then((api_res) => {
    console.log(api_res);
    res.render('application', {
      partials: {
        yield: 'views/movies/index.html'
      }
    });
  })
  .catch((err) => {
    return console.log(err);
  });
});

module.exports = router;
