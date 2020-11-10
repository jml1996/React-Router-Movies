import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

export default function MovieList(props) {
  const { movieList } = props;
  console.log(movieList);

  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  // const { title, director, metascore } = props.movie;
  const { movie } = props;

  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`} style={{ color: "black", textDecoration: 'none' }}>
        <h2>{movie.title}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
      </Link>
    </div>
  );
}
