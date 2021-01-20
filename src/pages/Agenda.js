import { lazy, Suspense } from "react";
import data from "../book/manifest.json";
import { Link, useLocation } from "react-router-dom";
import { BookPage, PrevNextBar } from "../ui";

const pathToAgenda = (path) =>
  path.split("/").filter((r) => r && r !== "agenda");

const toUrl = (...args) =>
  args.map((a) => a.trim().replace(/ /g, "-").toLowerCase()).join("/");

const checkTitleAgainst = (val) => (obj) =>
  obj.title.toLowerCase() === val.replace(/-/g, " ").toLowerCase();

const findTopic = (agenda = [], topicName) => {
  const index = agenda.findIndex(checkTitleAgainst(topicName));
  return [agenda[index], index];
};

const findSubTopic = (agenda = [], subTopicName) => {
  const index = agenda.findIndex((st) => st.title === subTopicName);
  return [agenda[index], index];
};

function useBookContent(path) {
  const routes = pathToAgenda(path);
  const [sectionName, topicName, subTopicName, stepName] = routes;
  const agenda = data.agenda.find(checkTitleAgainst(sectionName));
  const [topic, topicIndex] = topicName
    ? findTopic(agenda.agenda, topicName)
    : [null, null];
  const [subTopic, subTopicIndex] = subTopicName
    ? findSubTopic(topic.agenda, subTopicName)
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
  // TODO: Handle next when subtopic is out of scope
  //
  //  - Go to the next topic
  //

  if (!stepName) {
    let next = topic.agenda[subTopicIndex + 1];
    let prev = topic.agenda[subTopicIndex - 1];

    if (!next) {
      let nextTopic = agenda.agenda[topicIndex + 1];
      let nextSubTopic = nextTopic.agenda ? nextTopic.agenda[0] : nextTopic;

      next = {
        title: nextTopic.title,
        route: `/agenda/${toUrl(
          agenda.title,
          nextTopic.title,
          nextSubTopic.title
        )}`,
      };
    }

    if (!prev) {
      const prevTopic = agenda.agenda[topicIndex - 1];

      if (prevTopic.agenda) {
        const [prevSubTopic] = [...prevTopic.agenda].reverse();
        prev = {
          title: prevSubTopic.title,
          route: `/agenda/${toUrl(
            agenda.title,
            prevTopic.title,
            prevSubTopic.title
          )}`,
        };
      } else {
        prev = {
          title: prevTopic.title,
          route: `/agenda/${toUrl(agenda.title, prevTopic.title)}`,
        };
      }
    }

    console.log(`${agenda.title}/${topic.title}/${subTopicName}.md`);

    return {
      fileName: `${agenda.title}/${topic.title}/${subTopicName}.md`,
      previous: {
        title: prev.title,
        route:
          prev.route ||
          `/agenda/${toUrl(agenda.title, topic.title, prev.title)}`,
      },
      next: {
        title: next.title,
        route:
          next.route ||
          `/agenda/${toUrl(agenda.title, topic.title, next.title)}`,
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
