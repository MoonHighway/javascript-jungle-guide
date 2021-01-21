import { pickPrevious, pickNext } from "./pick";
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

  it("should dive deep into environment topic", () => {
    const [topic, route] = pickNext(manifest, "hello-world", "intro-slides");
    expect(topic.title).toEqual("install-vscode");
    expect(route).toEqual("hello-world/environment-setup/install-vscode");
  });
});
