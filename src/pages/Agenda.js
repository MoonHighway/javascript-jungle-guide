import { lazy, Suspense } from "react";
import courseAgenda from "../book/manifest.json";
import { Link, useLocation } from "react-router-dom";
import { BookPage, PrevNextBar } from "../ui";
import { pick, pickPrevious, pickNext, pickFirst } from "../lib";

//
// TODO: Step through entire hello world section
//
//    - [x] Display initial page
//    - [x] Initial Page Previous
//    - [x] Initial Page Next
//
//    - [ ] Display Slides Page
//    - [ ] Slides Page Previous
//    - [ ] Slides Page Next
//
//    - [ ] Display Environment Setup Pages
//    - [ ] Display Examine HTML Pages
//    - [ ] Display Periodic Table Primitives Pages
//
//    - [ ] Stage Periodic Table Objects files
//    - [ ] Stage DOM Interaction files
//
//    - [ ] Display Periodic Table Objects Screens
//    - [ ] Display DOM Interaction Screens
//
//    - [ ] Display DOT Click Lab
//    - [ ] DOT Click next and previous
//    - [ ] Display Data Structures Readme and HOLD
//

function useBookContent(path = []) {
  const topic = pick(courseAgenda, ...path);
  console.log(path);
  //const p = pickPrevious(topic, ...path);
  return [
    `${path.join("/")}.md`,
    [{ title: "Overview" }, "/overview"],
    [{ title: "HOLD" }, ""],
  ];
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
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
      <PrevNextBar>
        <Link to={pRoute || "/Overview"}>
          Back: {pTopic ? pTopic.title : "Course Overview"}
        </Link>
        <Link to="/">Home</Link>
        <Link to={nRoute || "/End"}>
          Next: {nTopic ? nTopic.title : "End Course"}
        </Link>
      </PrevNextBar>
    </BookPage>
  );
}
