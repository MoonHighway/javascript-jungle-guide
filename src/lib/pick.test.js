import { pick, pickLast } from "./pick";
import { deepData, shallowData } from "./pick.test.data";

describe("Selecting items in the manifest with pick", () => {
  describe("picking first items", () => {
    it("picks the first shallow leaf", () => {
      const { title } = pick(shallowData);
      expect(title).toEqual("First Section");
    });
    it("picks the first deep leaf", () => {
      const { title } = pick(deepData);
      expect(title).toEqual("Sub Topic III");
    });
  });

  describe("picking targeted items", () => {});

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
