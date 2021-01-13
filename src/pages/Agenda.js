import { useParams, Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";

export default function Agenda() {
  let { name } = useParams();
  return (
    <Centered>
      <h1>Agenda: {name}</h1>
      <PrevNextBar>
        <Link to="/agenda/previous">Previous</Link>
        <Link to="/">Home</Link>
        <Link to="/agenda/next">Next</Link>
      </PrevNextBar>
    </Centered>
  );
}
