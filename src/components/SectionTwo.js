/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from './ColorPalette';

// Import images
import man from '../images/man.png';

// Component style
const sectionTwoStyles = css`
  background: ${colors.grayWhite};
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    margin-left: 15.2vw;
    grid-column: 1;
  }

  h2 {
    color: ${colors.darkBlue};
    font-size: 2rem;
    margin: 9.6vw 0 2vw 0;
  }

  h4 {
    font-size: 1.29rem;
    color: ${colors.darkBlue};
    font-weight: 700;
    margin: 2.6vw 0 6vw 0;
  }

  img {
    grid-column: 2;
    margin-left: 9.4vw;
    transform: translateY(9.2vw);
  }

  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      margin: 0 5vw 10vw 5vw;
    }

    img {
      margin: 0 0 10vw 0;
      transform: none;
    }
  }
`;

export default function SectionTwo() {
  return (
    <section css={sectionTwoStyles}>
      <div>
        <h2>Subscription-based design service to help you grow, fast.</h2>

        <p>
          Don't let creative or design resources slow you down or act as a
          bottleneck. By investing in design early, you will be able to validate
          your ideas more quickly and better prioritize your time.
        </p>

        <h4>Get professional design work in 3 easy steps</h4>
      </div>
      <img src={man} alt="Cartoon Man" />
    </section>
  );
}
