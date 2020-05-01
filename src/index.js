import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import 'normalize.css/normalize.css';
import './index.css';
import { CloudimageProvider } from 'react-cloudimage-responsive';

const cloudimageConfig = {
   token: process.env.REACT_APP_CLOUDIMAGE_TOKEN,
   baseURL: process.env.REACT_APP_IMAGE_URL,
   presets: {
      xs: '(max-width: 425px)',
      sm: '(min-width: 426px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1440px)',
   },
   params: {
      sharp: 1,
      org_if_sml: 1,
   },
   placeholderBackground: 'none',
};

ReactDOM.render(
   <CloudimageProvider config={cloudimageConfig}>
      <App />
   </CloudimageProvider>,
   document.getElementById('root'),
);
