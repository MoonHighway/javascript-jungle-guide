import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";
import courseData from "../book/manifest.json";

const total = (topics = []) =>
  topics.reduce((sum, val) => {
    return val.length + sum;
  }, 0);

// send a section

export default function TOC() {
  return (
    <Centered>
      <h1>TOC</h1>

      {courseData.agenda.map(block => (
        <div>
          <h2>
            {block.title} -{" "}
            {block.length
              ? block.length
              : "different thing"}
          </h2>
          <hr />
          <ul>
            {block.agenda
              ? block.agenda.map(item => (
                  <li key={item.title}>
                    {item.title}
                    {" - "}
                    {item.length
                      ? item.length
                      : total(item.topics)}
                    {" minutes"}
                  </li>
                ))
              : block.steps.map(step => <li>{step}</li>)}
          </ul>
        </div>
      ))}
      <PrevNextBar>
        <Link to="/">Prev:Cover</Link>
        <Link to="/HowToUse">
          Next:How to use this guide
        </Link>
      </PrevNextBar>
    </Centered>
  );
}
