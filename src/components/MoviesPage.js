import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  //const match = useRouteMatch();
  //console.log(match)

  return (
    <div>
      <MoviesList movies={movies} />

{/* We have to use match.url instead of / to equal path because we do not want the message in this path
to show in the home page */}
      <Route exact path={useRouteMatch().url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route path={`${useRouteMatch().url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
