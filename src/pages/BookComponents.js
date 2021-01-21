import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";
import { lazy, Suspense } from "react";

const Content = lazy(() =>
  import("!babel-loader!mdx-loader!../book/book-components.md")
);

export default function BookComponents() {
  return (
    <Centered>
      <Suspense fallback="loading">
        <Content />
      </Suspense>
      <PrevNextBar>
        <Link to="/how-to-use">Prev: How to use this guide</Link>
        <Link to="/">Home</Link>
        <Link to="/overview">Next: Overview</Link>
      </PrevNextBar>
    </Centered>
  );
}
