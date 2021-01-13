import { Link } from "react-router-dom";
import { Centered } from "./ui";
import styled from "styled-components";

export default function Home() {
  return (
    <Centered>
      <Title>Welcome to the JavaScript Jungle</Title>
      <Link to="/TOC">Start</Link>
    </Centered>
  );
}

const Title = styled.h1`
  margin-bottom: 100px;
`;
