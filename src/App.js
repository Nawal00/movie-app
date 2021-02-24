import React , { useEffect } from 'react';
import SearchBar from './components/SearchBar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {

   

  return (
    <div className="App">
       Movie Search App
       <SearchBar />
    </div>
  );
}

export default App;
