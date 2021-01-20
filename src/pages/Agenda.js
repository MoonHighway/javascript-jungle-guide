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

const findTopic = (agenda = [], topicName) => {
  const index = agenda.findIndex(checkTitleAgainst(topicName));
  return [agenda[index], index];
};

function useBookContent(path) {
  const routes = pathToAgenda(path);
  const [sectionName, topicName, subTopicName, stepName] = routes;
  const agenda = data.agenda.find(checkTitleAgainst(sectionName));
  const [topic, topicIndex] = topicName
    ? findTopic(agenda.agenda, topicName)
    : [null, null];

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
    const nextTopic = agenda.agenda[topicIndex + 1];
    const [nextSubTopic] = nextTopic.agenda;
    return {
      fileName: `${agenda.title}/${topic.title}/README.md`,
      previous: {
        title: agenda.title,
        route: `/agenda/${toUrl(agenda.title)}`,
      },
      next: {
        title: nextSubTopic.title,
        route: `/agenda/${toUrl(
          agenda.title,
          nextTopic.title,
          nextSubTopic.title
        )}`,
      },
    };
  }

  //
  // TODO: Dynamically populate the next and previous links
  //

  if (!stepName) {
    return {
      fileName: `${agenda.title}/${topic.title}/${subTopicName}.md`,
      previous: {
        title: "Intro Slides",
        route: `/agenda/hello-world/environment-setup/student-files`,
      },
      next: {
        title: `Intro Slides`,
        route: `/agenda/hello-world/intro-slides`,
      },
    };
  }

  //
  // TODO: Load a Step
  //
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
