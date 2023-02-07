import React from 'react';

import Actor from './elements/Actor';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Navigation from './elements/Navigation';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

const Movie = ({ movieId }) => (
  <React.Fragment>
    <Navigation />
    <MovieInfo />
    <MovieInfoBar />
    <Grid>
      <Actor />
    </Grid>
    <Spinner />
  </React.Fragment>
);

export default Movie;