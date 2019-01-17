import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import logo from './Logo.png';
import './App.css';
import MovieList from './Movielist';
import MovieDetail from './Moviedetail';


const App = () => (
    <Router>
      <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </header>
          <Switch>
              <Route exact path="/" component={MovieList} />
              <Route path="/:id" component={MovieDetail} />
          </Switch>
      </div>
    </Router>
          );


export default App;
