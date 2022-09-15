import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import Search from "./Search";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import MoviePage from "./MoviePage";
import Profile from "./Profile";
import EditMovie from "./EditMovie";
import Update from "./Update";

function App() {
  const [selectedMovie, selectMovie] = useState([])
  const [selected, setSelect] = useState("")
  const [movies, setMovies] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
  }, [])

  useEffect(() => {
    selectMovie(movies.filter((movie) => {
      return movie.title === selected
    }))
  }, [selected])

  return (
    <div>
      <h1 id="main-header">Film Fanatics</h1>
      <NavBar id="NavBar" />

      <Switch>
        <Route path="/moviePage">
          <MoviePage movie={selectedMovie[0]} />
        </Route>
        <Route path="/search">
          <Search movies={movies} setSelect={setSelect} />
        </Route>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
        <Route exact path="/">
          <MovieList setSelect={setSelect} movies={movies} />
        </Route>
        <Route exact path="/movies/add">
          </Route>
        <Route exact path="/movies/edit/:id" component={EditMovie} />
      </Switch>
    </div>
  );
}

export default App;
