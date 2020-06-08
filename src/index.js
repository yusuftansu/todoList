import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {UserProvider} from './context';

ReactDOM.render(
  <UserProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserProvider>,
  document.getElementById('root')
);


