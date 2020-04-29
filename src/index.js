import React from 'react';
import ReactDOM from 'react-dom';
import 'picturefill';
import App from 'containers/App';
import 'normalize.css/normalize.css';
import './index.css';
import { CloudimageProvider } from 'react-cloudimage-responsive';

const cloudimageConfig = {
   token: process.env.REACT_APP_CLOUDIMAGE_TOKEN,
   baseURL: process.env.REACT_APP_IMAGE_URL,
};

ReactDOM.render(
   <CloudimageProvider config={cloudimageConfig}>
      <App />
   </CloudimageProvider>,
   document.getElementById('root'),
);
