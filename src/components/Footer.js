/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from './ColorPalette';

// Import images
import footerLogo from '../images/footer-logo.svg';

// Component style
const footerStyles = css`
  background: ${colors.grayWhite};
  display: flex;
  justify-content: center;
  height: 91px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    /* width: 62.5vw; */
    border-top: 1px solid ${colors.grayBorder};
  }

  p {
    color: ${colors.mediumGray};
    font-size: 0.7rem;
    margin: 0 50px 0 0;
  }

  @media screen and (max-width: 1300px) {
    div {
      width: 92vw;
    }
  }

  @media screen and (max-width: 770px) {
    height: 31vw;

    div {
      flex-direction: column;
      justify-content: center;
    }

    img {
      height: 9vw;
      margin-bottom: 6vw;
    }

    p {
      margin: 0 0 3vw 0;
    }
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <div>
        <img src={footerLogo} alt="Logo from Apselon" />

        <p>© Apselon 2021 | All rights reserved.</p>
      </div>
    </footer>
  );
}
