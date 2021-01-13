import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";

const Content = lazy(() =>
  import("!babel-loader!mdx-loader!../book/Overview.mdx")
);

export default function Overview() {
  return (
    <Centered>
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
      <PrevNextBar>
        <Link to="/HowToUse">Prev: How to use this guide</Link>
        <Link to="/agenda/Hello World">Start "Hello World"</Link>
      </PrevNextBar>
    </Centered>
  );
}
