import { Link } from "react-router-dom";
import { fonts, colors } from "../theme";
import styled from "styled-components";
import JSLogo from "../images/JSLogo.png";
import NodeJSLogo from "../images/NodeJSLogo.png";
import MHLogo from "../images/MHLogo.png";
import PayPalLogo from "../images/PayPalLogo.png";

export default function Cover() {
  return (
    <Content>
      <BottomCorner>
        <a
          href="http://www.moonhighway.com"
          target="_blank"
        >
          <img src={MHLogo} />
        </a>
      </BottomCorner>
      <div className="js-logo">
        <img src={JSLogo} />
      </div>
      <div className="node-logo">
        <img src={NodeJSLogo} />
      </div>
      <div className="pp-logo">
        <img src={PayPalLogo} />
      </div>
      <Title>
        <h1>
          Welcome to the <span>JavaScript Jungle</span>
        </h1>
        <h2>Teacher's Edition</h2>
      </Title>
      <Start>
        <Link to="/toc">Start</Link>
      </Start>
    </Content>
  );
}

const Title = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-family: ${fonts.subtitle};
    color: ${colors.primary};
  }

  h2 {
    font-size: 2em;
    color: ${colors.secondary};
    font-family: ${fonts.handwriting};
    text-align: center;
    align-self: flex-start;
  }

  span {
    display: block;
    font-size: 2.5em;
    font-family: ${fonts.title};
  }

  @media (orientation: landscape) {
    grid-area: 2 / 4 / 4 / 6;
  }

  @media (orientation: portrait) {
    grid-area: 3 / 4 / 5 / 6;
    margin-top: 30px;
  }
`;

const Start = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  a {
    font-family: ${fonts.title};
    font-size: 2.5em;
    color: ${colors.secondary};
    &:after {
      content: " > ";
    }
    text-decoration: none;
  }

  @media (orientation: landscape) {
    grid-area: 4 / 4 / 4 / 4;
  }
  @media (orientation: portrait) {
    grid-area: 6 / 4 / 7 / 5;
  }
`;

const BottomCorner = styled.div`
  @media (orientation: landscape) {
    grid-area: 5 / 1 / 6 / 2;
  }

  @media (orientation: portrait) {
    grid-area: 10 / 1 / 11 / 2;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  img {
    width: 100%;
  }

  .js-logo,
  .node-logo,
  .pp-logo {
    margin: 2px;
    padding: 2px;
  }

  @media (orientation: landscape) {
    grid-template-columns: repeat(3, 1fr) 3fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    .js-logo {
      grid-area: 2 / 2 / 3 / 3;
    }
    .node-logo {
      grid-area: 2 / 3 / 3 / 4;
    }
    .pp-logo {
      grid-area: 3 / 2 / 4 / 3;
    }
  }

  @media (orientation: portrait) {
    grid-template-columns: repeat(3, 1fr) 2fr 1fr;
    grid-template-rows: repeat(10, 1fr);

    .js-logo {
      grid-area: 3 / 2 / 4 / 3;
    }
    .node-logo {
      grid-area: 3 / 3 / 4 / 4;
    }
    .pp-logo {
      grid-area: 4 / 2 / 5 / 3;
    }
  }
`;
