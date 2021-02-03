/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from './ColorPalette';

// Import images
import logo from '../images/logo.svg';

// Component style
const headerStyles = css`
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 10vw;

  @media screen and (max-width: 1300px) {
    padding: 25px 4vw;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <img src={logo} alt="Logo of Apselon" />

      <button className="firstButtonStyle">See pricing</button>
    </header>
  );
}
