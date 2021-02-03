/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from './ColorPalette';

// Import images
import arrow from '../images/arrow.svg';
import diamond from '../images/diamond.png';
import flask from '../images/flask.png';
import folder from '../images/folder.png';

// Component style
const sectionThreeStyles = css`
  background: ${colors.white};
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  padding: 0 6vw;

  & > div {
    background: ${colors.darkBlue};
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
    color: ${colors.white};
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

export default function SectionThree() {
  return (
    <section css={sectionThreeStyles}>
      <div className="cardOne">
        <img src={folder} alt="folder" />

        <div>
          <h3>Submit your brief</h3>

          <p>
            Share with us your rough sketches, wireframes, screen descriptions
            and other project details.
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
            Receive your design files in no time. Request a revision or start
            using them in your development.
          </p>
        </div>
      </div>

      <img src={arrow} alt="arrow" className="arrowOne" />
      <img src={arrow} alt="arrow" className="arrowTwo" />
    </section>
  );
}
