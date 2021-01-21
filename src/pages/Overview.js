import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";
import bookAgenda from "../book/manifest.json";
import { pickFirst } from "../lib";

const Content = lazy(() =>
  import("!babel-loader!mdx-loader!../book/overview.md")
);

export default function Overview() {
  let [topic, route] = pickFirst(bookAgenda);

  route = route.replace("javascript-jungle-teacher's-edition", "agenda");

  return (
    <Centered>
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
      <PrevNextBar>
        <Link to="/book-components">Prev: Book Components</Link>
        <Link to={route}>Start {topic.title}</Link>
      </PrevNextBar>
    </Centered>
  );
}
