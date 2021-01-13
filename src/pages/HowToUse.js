import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";

export default function HowToUse() {
  return (
    <Centered>
      <h1>TODO: Insert MDX</h1>
      <PrevNextBar>
        <Link to="/TOC">Prev:Table of Contents</Link>
        <Link to="/overview">Next:Course Overview</Link>
      </PrevNextBar>
    </Centered>
  );
}
