import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";

const Content = lazy(() =>
  import("!babel-loader!mdx-loader!../book/How To Use.mdx")
);

export default function HowToUse() {
  return (
    <Centered>
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
      <PrevNextBar>
        <Link to="/TOC">Prev:Table of Contents</Link>
        <Link to="/overview">Next:Course Overview</Link>
      </PrevNextBar>
    </Centered>
  );
}
