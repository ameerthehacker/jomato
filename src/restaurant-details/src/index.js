import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/app';

const mfName = 'MfRestaurantDetails';
const mfRenderMethodName = `render${mfName}`;

if(process.env.NODE_ENV === 'development') {
  window['mfRenderMethodName'] = mfRenderMethodName;
}

window[mfRenderMethodName] = (container) => {
  ReactDom.render(<App />, document.getElementById(container));
};
