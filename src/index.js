import React from 'react';
import ReactDOM from 'react-dom';
import { css, Global } from '@emotion/react';
import App from './App';

// Color palette
const white = '#fafafa';
const grayWhite = '#f8f9fa';
const gray = '#8a94a6';
const lightBlue = '#e6eafc';
const mediumBlue = '#546ee8';
const darkBlue = '#243141';

const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 17px;
    line-height: 125%;
  }

  body {
    margin: 0;
    width: 100%;
    overflow-x: hidden;
  }

  .firstButtonStyle {
    background: ${lightBlue};
    color: ${mediumBlue};
    border: none;
    text-align: center;
    font-weight: 600;
    border-radius: 25px;
    padding: 7px 16px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background, color 0.5s ease-in-out;
  }

  .firstButtonStyle:hover {
    background: ${mediumBlue};
    color: ${lightBlue};
  }

  p {
    color: ${gray};
    font-weight: 500;
    text-align: center;
    font-size: 1.09rem;
    margin-bottom: 25px;
    line-height: 150%;
  }

  @media screen and (max-width: 1300px) {
    .firstButtonStyle {
      font-weight: 500;
      border-radius: 30px;
    }
  }

  @media screen and (max-width: 770px) {
    * {
      font-size: 3.4vw;
    }

    .firstButtonStyle {
      padding: 16px 25px;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
