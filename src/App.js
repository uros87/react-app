import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './sass/main.scss';

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
