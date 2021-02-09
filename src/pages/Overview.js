import { lazy, Suspense } from "react";
import { NavigationBar } from "../ui";
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
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
      <NavigationBar
        prev={{ to: "/how-to-use", text: "How to use this Guide" }}
        next={{ to: route, text: `Begin ${topic.title}` }}
      />
    </BookStyles>
  );
}
