import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";
import styled from "styled-components";

const Content = lazy(() =>
  import("!babel-loader!mdx-loader!../book/how-to-use.md")
);

export default function HowToUse() {
  return (
    <Centered>
      <Container>
        <Suspense fallback={<h1>loading</h1>}>
          <Content />
        </Suspense>
        <PrevNextBar>
          <Link to="/toc">Prev:Table of Contents</Link>
          <Link to="/book-components">Next:Book Components</Link>
        </PrevNextBar>
      </Container>
    </Centered>
  );
}

const Container = styled.div`
  width: 80%;
`;
