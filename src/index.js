import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import { breakpoints } from 'styles/breakpoints';
import 'normalize.css/normalize.css';
import './index.css';
import { CloudimageProvider } from 'react-cloudimage-responsive';

const cloudimageConfig = {
   token: process.env.REACT_APP_CLOUDIMAGE_TOKEN,
   baseURL: process.env.REACT_APP_IMAGE_URL,
   presets: {
      xs: `(max-width: ${breakpoints.small - 1}px)`,
      sm: `(min-width: ${breakpoints.small}px)`,
      md: `(min-width: ${breakpoints.medium}px)`,
      lg: `(min-width: ${breakpoints.large}px)`,
      xl: `(min-width: ${breakpoints.xLarge}px)`,
   },
   params: {
      sharp: 1,
      org_if_sml: 1,
   },
   placeholderBackground: 'none',
   lowQualityPreview: {
      minImgWidth: 10000,
   },
};

ReactDOM.render(
   <CloudimageProvider config={cloudimageConfig}>
      <App />
   </CloudimageProvider>,
   document.getElementById('root'),
);
