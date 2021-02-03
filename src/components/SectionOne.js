/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from './ColorPalette';

// Import images
import circle from '../images/1.png';
import cube from '../images/cube.png';
import cursor from '../images/cursor.png';
import ruler from '../images/ruler.png';
import mainScreen from '../images/main-screen.png';
import logo1 from '../images/logo1.svg';
import logo2 from '../images/logo2.svg';
import logo3 from '../images/logo3.svg';
import logo4 from '../images/logo4.svg';
import logo5 from '../images/logo5.svg';

// Component style
const sectionOneStyles = css`
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.33rem;
    color: ${colors.darkBlue};
    text-align: center;
    font-weight: 700;
    max-width: 710px;
    margin: 100px 0 12px 0;
  }

  p {
    text-align: center;
  }

  .circle {
    position: absolute;
    width: 11.7vw;
    left: -2vw;
    top: 43.5vh;
  }

  .cursor {
    position: absolute;
    width: 6.5vw;
    right: 13vw;
    top: 54.3vh;
  }

  .cube {
    position: absolute;
    width: 13vw;
    right: -4.5vw;
    top: 71.7vh;
  }

  .ruler {
    position: absolute;
    width: 7.8vw;
    left: 7.1vw;
    top: 73.9vh;
  }

  .mainScreen {
    margin-top: 80px;
    width: 42.25vw;
    transform: translateX(-7%);
  }

  h5 {
    font-size: 1.09rem;
    color: ${colors.darkBlue};
    margin: 105px 0 40px 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 120px;
  }

  div > img {
    margin: 0 28px 35px 0;
  }

  @media screen and (max-width: 770px) {
    h1 {
      max-width: 72vw;
    }

    .circle,
    .cursor,
    .cube,
    .ruler {
      display: none;
    }

    .mainScreen {
      width: 75vw;
    }

    div > img {
      width: 30vw;
    }
  }
`;

export default function SectionOne() {
  return (
    <section css={sectionOneStyles}>
      <h1>
        Scale your SaaS with <br /> on-demand UI/UX design
      </h1>

      <p>
        Get your own dedicated team of senior UI/UX
        <br />
        designers. Fast turnarounds for a flat monthly fee.
      </p>

      <button className="firstButtonStyle">See pricing</button>

      <img className="circle" src={circle} alt="Circle in the background" />
      <img className="cursor" src={cursor} alt="Cursor in the background" />
      <img className="cube" src={cube} alt="Cube in the background" />
      <img className="ruler" src={ruler} alt="Ruler in the background" />
      <img className="mainScreen" src={mainScreen} alt="Cartoon PC" />

      <h5>Trusted by over 20 tech & marketing teams</h5>

      <div>
        <img src={logo1} alt="Logo of 'Sense360'" />
        <img src={logo2} alt="Logo of 'Protagonist'" />
        <img src={logo3} alt="Logo of 'Millermedia7'" />
        <img src={logo4} alt="Logo of 'Salesfokuz'" />
        <img src={logo5} alt="Logo of 'Inbound'" />
      </div>
    </section>
  );
}
