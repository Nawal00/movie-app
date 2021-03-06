import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Jumbotron, } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Home from './components/home/Home';
import MovieDetails from './components/movies/MovieDetail';
import ActorDetails from './components/actor/ActorDetails';
import TvShowDetails from './components/tvshow/TvShowDetails';
import SearchBar from './components/search/SearchBar';

import useSearchHooks from './hooks/useSearchHooks';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


const App = () => {

  const {
    handleInputChange,
    fetchSearchAllAPI,
    handleSearchFilterType,
    filteredSearchResult,
    searchFilterType,
    searchInputValue,
    suggestions,
    setSearchInputValue,
  } = useSearchHooks();


  return (
    <main className="App">
      <Jumbotron fluid className="text-center">
        <h1>Movie Database Search App</h1>
        <p>Enter any movie, TV show or cast name to start your search!</p>
      </Jumbotron>
      <SearchBar
        searchInputValue={searchInputValue}
        handleInputChange={handleInputChange}
        fetchSearchAllAPI={fetchSearchAllAPI}
        searchFilterType={searchFilterType}
        handleSearchFilterType={handleSearchFilterType}
        suggestions={suggestions}
        setSearchInputValue={setSearchInputValue}
      />
      <Switch>
        <Route path="/tv/:tv_show_id" component={TvShowDetails} />
        <Route path="/person/:actor_id" component={ActorDetails} />
        <Route path="/movie/:movie_id" component={MovieDetails} />
        <Route exact path="/" render={() => <Home filteredSearchResult={filteredSearchResult} />} />
      </Switch>
    </main>
  );
}

export default App;

App.propTypes = {
  searchInputValue: PropTypes.string,
  handleInputChange: PropTypes.func,
  fetchSearchAllAPI: PropTypes.func,
  handleSearchFilterType: PropTypes.func,
  searchFilterType: PropTypes.string,
  suggestions: PropTypes.array,
  setSearchInputValue: PropTypes.func,
}