import React, { Fragment } from 'react';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './sass/base/_container.scss';

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <Route exact path="/" component={HomeScreen} />
      </div>
    </Router>
  );
};

export default App;
