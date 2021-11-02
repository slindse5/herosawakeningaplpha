import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { XpProvider } from './xpContext';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <XpProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </XpProvider>
, document.getElementById('root'));


serviceWorker.unregister();