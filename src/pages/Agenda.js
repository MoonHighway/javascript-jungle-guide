import { lazy, Suspense, useMemo } from "react";
import data from "../book/manifest.json";
import { useParams, Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";

function loadSection(route) {
  if (!route) {
    throw new Error(`loadSection(route) requires a route to load`);
  }

  if (!data || !data.agenda) {
    throw new Error(`The manifest.json file must contain at least one agenda`);
  }

  const agenda = data.agenda.find(
    (agenda) =>
      agenda.title.toLowerCase() === route.replace("-", " ").toLowerCase()
  );

  if (!agenda) {
    throw new Error(
      `The manifest.json does not contain an agenda that matches route: ${route}`
    );
  }

  return { agenda };
}

function useContent(path) {
  const Content = useMemo(() => {
    const routes = path.split("/");

    // Load Section
    if (routes.length === 1) {
      const [route] = routes;
      const { agenda } = loadSection(route);

      return lazy(() =>
        import(`!babel-loader!mdx-loader!../book/${agenda.title}/README.md`)
      );
    }
  }, [path]);

  return {
    Content,
    previous() {
      return <Link to="">Previous</Link>;
    },
    next() {
      return <Link to="">Next</Link>;
    },
  };
}

export default function Agenda() {
  let { path } = useParams();
  const { Content, Prevous, Next } = useContent(path);

  return (
    <Centered>
      <Suspense fallback={<h1>loading</h1>}>
        <Content />
      </Suspense>
      <PrevNextBar>
        <Link to="/agenda/previous">Previous</Link>
        <Link to="/">Home</Link>
        <Link to="/agenda/next">Next</Link>
      </PrevNextBar>
    </Centered>
  );
}
