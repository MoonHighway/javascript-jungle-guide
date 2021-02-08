import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { PrevNextBar } from "../ui";
import bookAgenda from "../book/manifest.json";
import { BookStyles } from "../book-ui";
import { pickFirst } from "../lib";

const Content = lazy(() =>
  import("!babel-loader!mdx-loader!../book/overview.md")
);

export default function Overview() {
  let [topic, route] = pickFirst(bookAgenda);

  route = route.replace("javascript-jungle-teacher's-edition", "agenda");

  return (
    <BookStyles>
      <PrevNextBar>
        <Link to="/book-components">Prev: How to Use this Guide</Link>
        <Link to={route}>Next: Begin "{topic.title}"</Link>
      </PrevNextBar>
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
      <PrevNextBar>
        <Link to="/book-components">Prev: How to Use this Guide</Link>
        <Link to={route}>Next: Begin "{topic.title}"</Link>
      </PrevNextBar>
    </BookStyles>
  );
}
