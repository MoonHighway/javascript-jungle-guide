import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";
import courseData from "../book/manifest.json";
<<<<<<< HEAD
import { totalTime } from "../lib";
=======

const total = (topics = []) =>
  topics.reduce((sum, val) => {
    return val.length + sum;
  }, 0);

// send a section
>>>>>>> Adds toc first draft

export default function TOC() {
  return (
    <Centered>
      <h1>TOC</h1>
<<<<<<< HEAD
      {courseData.agenda.map(block => (
        <div>
          <h2>
            {block.title} - {totalTime(block)} mins
=======

      {courseData.agenda.map(block => (
        <div>
          <h2>
            {block.title} -{" "}
            {block.length
              ? block.length
              : "different thing"}
>>>>>>> Adds toc first draft
          </h2>
          <hr />
          <ul>
            {block.agenda
              ? block.agenda.map(item => (
<<<<<<< HEAD
                  <li>
                    {item.title} - {totalTime(item)} mins
=======
                  <li key={item.title}>
                    {item.title}
                    {" - "}
                    {item.length
                      ? item.length
                      : total(item.topics)}
                    {" minutes"}
>>>>>>> Adds toc first draft
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
