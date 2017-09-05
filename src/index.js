import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
   :root {
      --basic-font-size: calc(0.75rem + (1.2 - 0.75) * ((100vw - 18.75em) / (75 - 18.75)));
      --line-height: 1.4;
      --vertical-rhytm: calc(var(--basic-font-size)*var(--line-height));
      --font-family: 'Montserrat', sans-serif;
      --font-color: black;
      --orange-color: #F46524;
    }
   html {
      font-size: var(--basic-font-size);
      font-kerning: normal;
      text-rendering: geometricPrecision;
      font-family: var(--font-family);
    }
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
