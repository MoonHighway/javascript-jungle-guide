import { pick } from "./pick";
import testManifest from "./pick.test.data.js";

describe("Selecting items in the manifest with pick", () => {
  it("picks the first topic", () => {
    const topic = pick(testManifest);
    expect(topic.title).toEqual("Hello World");
  });
});
