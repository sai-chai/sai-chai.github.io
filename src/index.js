import React from 'react';
import ReactDOM from 'react-dom';
import 'picturefill';
import StoreProvider from 'store';
import App from 'containers/App';
import 'normalize.css/normalize.css';
import './index.css';

ReactDOM.render(
   <StoreProvider>
      <App />
   </StoreProvider>,
   document.getElementById('root'),
);
