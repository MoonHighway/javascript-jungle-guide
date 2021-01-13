import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";
import { importMDX } from "mdx.macro";

const OverviewContent = lazy(() => importMDX("../book/Overview.mdx"));

export default function Overview() {
  return (
    <Centered>
      <Suspense fallback={<div>Loading...</div>}>
        <OverviewContent />
      </Suspense>
      <PrevNextBar>
        <Link to="/HowToUse">Prev: How to use this guide</Link>
        <Link to="/agenda/Hello World">Start "Hello World"</Link>
      </PrevNextBar>
    </Centered>
  );
}
