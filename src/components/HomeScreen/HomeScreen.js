import React, { Fragment } from 'react';
import '../../sass/main.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = () => {
  const getPdf = () => {
    var bodyFormData = new FormData();
    bodyFormData.append('user_credentials', 'YOUR_API_KEY_HERE123');
    bodyFormData.append('doc[test]', true);
    bodyFormData.append('doc[type]', 'pdf');
    bodyFormData.append('doc[document_content]', '<div></div>');

    axios({
      method: 'post',
      url: 'https://docraptor.com/docs/',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <div className="main-content">
      <div>
        <h3>Fuel decision-making with rapid, remote testing</h3>
      </div>
      <div className="description">
        Test evrything from prototypes, concepts, and copy with Maze.
        Confidently go from idea to launch with actionable user insights that
        are delivered to you in hours, not days
      </div>
      <div className="get-started">
        <button className="l-button">Get started</button>
        <button className="demo">Try the demo</button>
      </div>

      <button onClick={getPdf}>pdf</button>
    </div>
  );
};

export default HomeScreen;
