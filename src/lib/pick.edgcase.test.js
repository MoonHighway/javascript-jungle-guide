import { pickPrevious } from "./pick";
import manifest from "../book/manifest.json";

describe("Production issues with pick", () => {
  it("pick previous from chapter overview", () => {
    const [topic, route] = pickPrevious(
      manifest,
      "hello-world",
      "intro-slides"
    );
    expect(topic.title).toEqual("Chapter Overview");
    expect(route).toEqual("hello-world/chapter-overview");
  });
});
