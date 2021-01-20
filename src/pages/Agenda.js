import { lazy, Suspense } from "react";
import data from "../book/manifest.json";
import { Link, useLocation } from "react-router-dom";
import { BookPage, PrevNextBar } from "../ui";

const pathToAgenda = (path) =>
  path.split("/").filter((r) => r && r !== "agenda");

const toUrl = (...args) =>
  args.map((a) => a.trim().replace(" ", "-").toLowerCase()).join("/");

const checkTitleAgainst = (val) => (obj) =>
  obj.title.toLowerCase() === val.replace("-", " ").toLowerCase();

const findIndicesAllAround = (list, item) => {
  const index = list.findIndex((i) => i.title === item.title);
  return [
    index <= list.length ? index + 1 : null,
    index === 0 ? null : index - 1,
  ];
};

function useBookContent(path) {
  const routes = pathToAgenda(path);
  const [sectionName, topicName, subTopicName, stepName] = routes;
  const agenda = data.agenda.find(checkTitleAgainst(sectionName));
  const topic = topicName && agenda.agenda.find(checkTitleAgainst(topicName));

  if (!topicName) {
    const [topic] = agenda.agenda;
    return {
      fileName: `${agenda.title}/README.md`,
      previous: {
        title: "Course Overview",
        route: "/Overview",
      },
      next: {
        title: topic.title,
        route: `/agenda/${toUrl(agenda.title, topic.title)}`,
      },
    };
  }

  if (!subTopicName) {
    return {
      title: "Holder",
      fileName: `${agenda.title}/${topic.title}/README.md`,
      previous: {
        title: agenda.title,
        route: `/agenda/${toUrl(agenda.title)}`,
      },
      next: {
        title: "HOLD",
        route: "",
      },
    };
  }
}

export default function Agenda() {
  let { pathname } = useLocation();
  const { fileName, previous, next } = useBookContent(pathname);

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
