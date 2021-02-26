import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/home/Home';
import MovieDetails from './components/movies/MovieDetail';
import ActorDetails from './components/actor/ActorDetails';
import TvShowDetails from './components/tvshow/TvShowDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {


  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/tv/:tv_show_id" component={TvShowDetails} />
          <Route path="/actor/:actor_id" component={ActorDetails} />
          <Route path="/movie/:movie_id" component={MovieDetails} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
