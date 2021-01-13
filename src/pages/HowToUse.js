import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Centered, PrevNextBar } from "../ui";
import { importMDX } from "mdx.macro";

const HowToUseContent = lazy(() => importMDX("../book/How To Use.mdx"));

export default function HowToUse() {
  return (
    <Centered>
      <Suspense fallback={<div>Loading...</div>}>
        <HowToUseContent />
      </Suspense>
      <PrevNextBar>
        <Link to="/TOC">Prev:Table of Contents</Link>
        <Link to="/overview">Next:Course Overview</Link>
      </PrevNextBar>
    </Centered>
  );
}
