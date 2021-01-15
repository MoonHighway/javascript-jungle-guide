import { Link } from "react-router-dom";
import { Centered } from "./ui";
import styled from "styled-components";
import JSLogo from "./images/JSLogo.png";
import NodeJSLogo from "./images/NodeJSLogo.png";
import MHLogo from "./images/MHLogo.png";
import PayPalLogo from "./images/PayPalLogo.png";

export default function Home() {
  return (
    <Centered>
      <img src={JSLogo} alt="JavaScript logo" />
      <img src={NodeJSLogo} alt="Node.js logo" />
      <Title>Welcome to the JavaScript Jungle</Title>
      <h2>Teacher's Edition</h2>
      <Link to="/TOC">Start</Link>
      <img src={MHLogo} alt="Moon Highway logo" />
      <img src={PayPalLogo} alt="PayPal logo" />
    </Centered>
  );
}

const Title = styled.h1`
  margin-bottom: 100px;
`;
