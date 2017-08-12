const express = require('express');
const router = express.Router();
const axios = require('axios');

router
.get('/', (req, res) => {
  const popularMoviesURL = `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`;
  axios.get(popularMoviesURL)
  .then((api_res) => {
    res.render('application', {
      locals: {
        movies: api_res.data,
        user: req.user
      },
      partials: {
        yield: 'views/movies/index.html'
      }
    });
  })
  .catch((err) => {
    return console.log(err);
  });
})
.get('/movies/:id', (req, res) => {
  const movieURL = `http://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`;
  axios.get(movieURL)
  .then((api_res) => {
    console.log(api_res);
    // res.send(JSON.stringify(api_res));
  })
  .catch((err) => {
    return console.log(err);
  });

});

module.exports = router;
