import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";

export default function Overview() {
  return (
    <Centered>
      <h1>Overview</h1>
      <PrevNextBar>
        <Link to="/HowToUse">Prev: How to use this guide</Link>
        <Link to="/agenda/Hello World">Start "Hello World"</Link>
      </PrevNextBar>
    </Centered>
  );
}
