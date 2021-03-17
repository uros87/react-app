import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { Counter } from './Counter/Counter';
import SignUp from './components/SignUp/SignUp';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './sass/main.scss';

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  );
};

export default App;
