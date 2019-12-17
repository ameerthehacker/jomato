import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

const mfName = 'MfRestaurants';
const mfRenderMethodName = `render${mfName}`;
const Root = (
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>
);

if(process.env.NODE_ENV === 'development') {
  window['mfRenderMethodName'] = mfRenderMethodName; 
}

window[mfRenderMethodName] = (container) => {
  ReactDom.render(Root, document.getElementById(container));
};
