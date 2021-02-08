import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { PrevNextBar } from "../ui";
import { BookStyles } from "../book-ui";

const Content = lazy(() =>
  import("!babel-loader!mdx-loader!../book/how-to-use.md")
);

export default function HowToUse() {
  return (
    <BookStyles>
      <PrevNextBar>
        <Link to="/toc">Prev:Table of Contents</Link>
        <Link to="/overview">Next:Overview</Link>
      </PrevNextBar>
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
      <PrevNextBar>
        <Link to="/toc">Prev:Table of Contents</Link>
        <Link to="/overview">Next:Course Overview</Link>
      </PrevNextBar>
    </BookStyles>
  );
}
