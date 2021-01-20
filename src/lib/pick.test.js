import { pickFirst, pickLast, pick } from "./pick";
import { deepData, shallowData } from "./pick.test.data";

describe("Selecting items in the manifest with pick", () => {
  describe("picking first items", () => {
    it("picks the first shallow leaf", () => {
      const { title } = pickFirst(shallowData);
      expect(title).toEqual("First Section");
    });
    it("picks the first deep leaf", () => {
      const { title } = pickFirst(deepData);
      expect(title).toEqual("Sub Topic III");
    });
  });

  describe("picking targeted items", () => {
    it("picks a section by url String", () => {
      const { title } = pick(shallowData, "second-section");
      expect(title).toEqual("Second Section");
    });
    it("picks a section by Title", () => {
      const { title } = pick(shallowData, "Second Section");
      expect(title).toEqual("Second Section");
    });
    it.skip("picks a topic", () => {
      const { title } = pick(deepData, "second-section", "middle-topic");
      expect(title).toEqual("Middle Topic");
    });
    it.skip("picks a subtopic", () => {
      const { title } = pick(
        deepData,
        "third-section",
        "warmer-topic",
        "under-topic",
        "fi"
      );
      expect(title).toEqual("Fi");
    });
  });

  describe("picking last items", () => {
    it("picks last  shallow leaf", () => {
      const { title } = pickLast(shallowData);
      expect(title).toEqual("Third Section");
    });
    it("picks the last deep leaf", () => {
      const { title } = pickLast(deepData);
      expect(title).toEqual("Fo");
    });
  });
});
