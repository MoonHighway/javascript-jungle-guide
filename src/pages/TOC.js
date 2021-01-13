import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";

export default function TOC() {
  return (
    <Centered>
      <h1>TOC</h1>
      <PrevNextBar>
        <Link to="/">Prev:Cover</Link>
        <Link to="/HowToUse">Next:How to use this guide</Link>
      </PrevNextBar>
    </Centered>
  );
}
