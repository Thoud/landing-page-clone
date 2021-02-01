import React from 'react';
import ReactDOM from 'react-dom';
import { css, Global } from '@emotion/react';
import App from './App';

const globalStyles = css`
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  body,
  button {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    display: grid;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
