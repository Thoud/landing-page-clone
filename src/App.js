/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Importing images
import circle from './images/1.png';
import arrow from './images/arrow.svg';
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import b3 from './images/b3.png';
import b4 from './images/b4.png';
import b5 from './images/b5.png';
import b6 from './images/b6.png';
import circle1 from './images/circle1.png';
import cube from './images/cube.png';
import cursor from './images/cursor.png';
import diamond from './images/diamond.png';
import flask from './images/flask.png';
import folder from './images/folder.png';
import footerLogo from './images/footer-logo.svg';
import hand from './images/hand.png';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import logo from './images/logo.svg';
import logo1 from './images/logo1.svg';
import logo2 from './images/logo2.svg';
import logo3 from './images/logo3.svg';
import logo4 from './images/logo4.svg';
import logo5 from './images/logo5.svg';
import mainScreen from './images/main-screen.png';
import man from './images/man.png';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import p5 from './images/p5.png';
import p6 from './images/p6.png';
import p7 from './images/p7.png';
import p8 from './images/p8.png';
import p9 from './images/p9.png';
import p10 from './images/p10.png';
import p11 from './images/p11.png';
import p12 from './images/p12.png';
import pencil from './images/pencil.png';
import photo from './images/photo.png';
import ruler from './images/ruler.png';
import bucket from './images/v.png';

// Color palette
const white = '#ffffff';
const grayWhite = '#f8f9fa';
const gray = '#8a94a6';
const lightBlue = '#e6eafc';
const mediumBlue = '#546ee8';
const darkBlue = '#243141';

// Styling the components
const headerStyles = css`
  background: ${white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 10vw;

  @media screen and (max-width: 1300px) {
    padding: 25px 4vw;
  }
`;

const sectionOneStyles = css`
  background: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.33rem;
    color: ${darkBlue};
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
    color: ${darkBlue};
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

const sectionTwoStyles = css`
  background: ${grayWhite};
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    margin-left: 15.2vw;
    grid-column: 1;
  }

  h2 {
    color: ${darkBlue};
    font-size: 2rem;
    margin: 9.6vw 0 2vw 0;
  }

  h4 {
    font-size: 1.29rem;
    color: ${darkBlue};
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

const sectionThreeStyles = css`
  background: ${white};
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  padding: 0 6vw;

  & > div {
    background: ${darkBlue};
    width: 40vw;
    height: 225px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 4.2vw;
    margin-bottom: 5vw;
    transform: translateY(-2vw);
  }

  .cardOne {
    grid-area: 1 / 1 / 1 / span 2;
  }

  .cardTwo {
    grid-area: 2 / 2 / 2 / span 2;
  }

  .cardThree {
    grid-area: 3 / 3 / 3 / span 2;
  }

  img {
    margin: 4.2vw 3.1vw;
  }

  h3 {
    font-size: 1.5rem;
    color: ${white};
    margin: 0.5vw 0 0.5vw 0;
  }

  p {
    margin-top: 0.5vw;
  }

  .arrowOne {
    grid-area: 2 / 1 / 2 / 1;
  }

  .arrowTwo {
    grid-area: 3 / 2 / 3 / 2;
  }

  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
      transform: none;
      width: 95vw;
      height: 250px;
    }

    .arrowOne,
    .arrowTwo {
      display: none;
    }
  }
`;

export default function App() {
  return (
    <>
      <header css={headerStyles}>
        <img src={logo} alt="Logo of Apselon" />

        <button className="firstButtonStyle">See pricing</button>
      </header>
      <main>
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

        <section css={sectionTwoStyles}>
          <div>
            <h2>Subscription-based design service to help you grow, fast.</h2>

            <p>
              Don't let creative or design resources slow you down or act as a
              bottleneck. By investing in design early, you will be able to
              validate your ideas more quickly and better prioritize your time.
            </p>

            <h4>Get professional design work in 3 easy steps</h4>
          </div>
          <img src={man} alt="Cartoon Man" />
        </section>

        <section css={sectionThreeStyles}>
          <div className="cardOne">
            <img src={folder} alt="folder" />

            <div>
              <h3>Submit your brief</h3>

              <p>
                Share with us your rough sketches, wireframes, screen
                descriptions and other project details.
              </p>
            </div>
          </div>

          <div className="cardTwo">
            <img src={flask} alt="flask" />

            <div>
              <h3>We'll get to work</h3>

              <p>
                We'll carefully turn your wireframes, prototypes & concepts into
                user-friendly and stunning UI designs.
              </p>
            </div>
          </div>

          <div className="cardThree">
            <img src={diamond} alt="diamond" />

            <div>
              <h3>Get designs you'll love</h3>

              <p>
                Receive your design files in no time. Request a revision or
                start using them in your development.
              </p>
            </div>
          </div>

          <img src={arrow} alt="arrow" className="arrowOne" />
          <img src={arrow} alt="arrow" className="arrowTwo" />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
