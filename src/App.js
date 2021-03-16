import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { Counter } from './features/counter/Counter';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './sass/main.scss';

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/counter" component={Counter} />
      </div>
    </Router>
  );
};

export default App;
