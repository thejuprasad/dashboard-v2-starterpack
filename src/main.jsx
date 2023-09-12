// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Auth0Provider from './Auth0Provider';
import './index.css';

ReactDOM.render(
    <Router>
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </Router>,
    document.getElementById('root')
  );
