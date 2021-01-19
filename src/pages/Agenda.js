import { lazy, Suspense } from "react";
import data from "../book/manifest.json";
import { useParams, Link } from "react-router-dom";
import { BookPage, PrevNextBar } from "../ui";

const isSection = (routes = []) => routes.length === 1;

function useBookContent(path) {
  const routes = path.split("/");
  if (isSection(routes)) {
    const [route] = routes;
    const agenda = data.agenda.find(
      (agenda) =>
        agenda.title.toLowerCase() === route.replace("-", " ").toLowerCase()
    );
    return {
      title: agenda.title,
      fileName: `${agenda.title}/README.md`,
      previous: {
        title: "Course Overview",
        route: "/Overview",
      },
      next: {
        title: "TODO",
        route: "",
      },
    };
  }
}

export default function Agenda() {
  let { path } = useParams();
  const { fileName, previous, next } = useBookContent(path);

  const Content = lazy(() =>
    import(`!babel-loader!mdx-loader!../book/${fileName}`)
  );

  return (
    <BookPage>
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
      <PrevNextBar>
        <Link to={previous.route}>Back: {previous.title}</Link>
        <Link to="/">Home</Link>
        <Link to={next.route}>Next: {next.title}</Link>
      </PrevNextBar>
    </BookPage>
  );
}
