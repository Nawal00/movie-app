import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Jumbotron, Col } from 'react-bootstrap';

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
    handleSearchKeywords,
    fetchSearchKeywordsAPI,
    handleSearchType,
    filteredSearchResult,
    searchType,
    searchInputValue,
    suggestions,
    setSearchInputValue,
  } = useSearchHooks();

  return (
    <main className="App">
      <Col md={12} sm={12}>
        <Jumbotron fluid className="text-center">
        <h1>Movie Database Search App</h1>
        <p>Enter any movie, TV show or cast name to start your search!</p>
      </Jumbotron>
      </Col>
      <SearchBar
        searchInputValue={searchInputValue}
        handleSearchKeywords={handleSearchKeywords}
        fetchSearchKeywordsAPI={fetchSearchKeywordsAPI}
        searchType={searchType}
        handleSearchType={handleSearchType}
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
