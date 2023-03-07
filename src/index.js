import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import './polyfills';
ReactDOM.render(
  <>
      <App />
  
  </>
  ,
  document.getElementById('bodyWrapper')
);

