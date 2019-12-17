import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/app';

const mfName = 'MfRestaurantDetails';
const mfRenderMethod = `render${mfName}`;

if(process.env.NODE_ENV === 'development') {
  window['mfRenderMethod'] = mfRenderMethod; 
}

window[mfRenderMethod] = () => {
  ReactDom.render(<App />, document.getElementById(mfName));
};
