import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {


  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/movie/:id" component={MovieDetail} /> */}
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
