import { lazy, Suspense } from "react";
import courseAgenda from "../book/manifest.json";
import { Link, useLocation } from "react-router-dom";
import { BookPage, PrevNextBar } from "../ui";
import { pickPrevious, pickNext } from "../lib";

function useBookContent(path = []) {
  let [pTopic, pRoute] = pickPrevious(courseAgenda, ...path);
  let [nTopic, nRoute] = pickNext(courseAgenda, ...path);
  console.log(path);
  if (!pTopic) {
    pTopic = { title: "Course Overview" };
    pRoute = "/overview";
  } else {
    pRoute = `/agenda/${pRoute}`;
  }

  if (!nTopic) {
    nTopic = { title: "End Course" };
    nRoute = "/end";
  } else {
    nRoute = `/agenda/${nRoute}`;
  }

  return [`${path.join("/")}.md`, [pTopic, pRoute], [nTopic, nRoute]];
}

export default function Agenda() {
  let { pathname } = useLocation();
  const [fileName, [pTopic, pRoute], [nTopic, nRoute]] = useBookContent(
    pathname.replace("/agenda/", "").split("/")
  );

  const Content = lazy(() =>
    import(`!babel-loader!mdx-loader!../book/${fileName}`)
  );

  return (
    <BookPage>
      <PrevNextBar>
        <Link to={pRoute}>Back: {pTopic.title}</Link>
        <Link to="/">Home</Link>
        <Link to={nRoute}>Next: {nTopic.title}</Link>
      </PrevNextBar>
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
    </BookPage>
  );
}
