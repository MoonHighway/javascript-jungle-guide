import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";
import courseData from "../book/manifest.json";
import { totalTime } from "../lib";
import styled from "styled-components";

export default function TOC() {
  return (
    <Centered>
      <Container>
        <h1>TOC</h1>
        {courseData.agenda.map(block => (
          <div>
            <h2>
              {block.title} - {totalTime(block)} mins
            </h2>
            <hr />
            <ul>
              {block.agenda
                ? block.agenda.map(item => (
                    <li>
                      {item.title} - {totalTime(item)} mins
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
      </Container>
    </Centered>
  );
}

const Container = styled.div`
  width: 80%;
`;
