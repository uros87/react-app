import React, { Fragment } from 'react';
import '../../sass/main.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = () => {
  const getPdf = () => {
    // odavde radi raptor

    const raptor = {
      createAndDownloadDoc: function (api_key, doc_attrs) {
        var makeFormElement = function (name, value) {
          var element = document.createElement('textarea');
          element.name = name;
          element.value = value;
          return element;
        };
        var form = document.createElement('form');
        form.action = 'https://docraptor.com/docs';
        form.method = 'post';
        form.style.display = 'none';
        form.appendChild(makeFormElement('user_credentials', api_key));
        for (var key in doc_attrs) {
          if (key == 'prince_options') {
            for (var option in doc_attrs.prince_options) {
              form.appendChild(
                makeFormElement(
                  'doc[prince_options][' + option + ']',
                  doc_attrs.prince_options[option]
                )
              );
            }
          } else {
            form.appendChild(
              makeFormElement('doc[' + key + ']', doc_attrs[key])
            );
          }
        }
        document.body.appendChild(form);

        form.submit();
      },
    };

    raptor.createAndDownloadDoc('YOUR_API_KEY_HERE', {
      // test: true, // test documents are free, but watermarked
      type: 'pdf',
      document_content: document.querySelector('.main-content').innerHTML, // use this page's HTML
      // document_content: '<div><h1>Hello world!</h1><h3>Helllooo!!!</h3></div>', // or supply HTML directly
      // document_url: 'http://example.com/your-page', // or use a URL
      // javascript: true, // enable JavaScript processing
      // prince_options: {
      //   media: "screen",                                       // use screen styles instead of print styles
      // }
      async: true,
      // ignore_resource_errors: false,
      // ignore_console_messages: false,
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
