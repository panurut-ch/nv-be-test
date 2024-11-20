import { countSmileFace } from "./indexthree";

describe("countSmileFace", () => {
  test("should return 2 for [':)', ';(', ';}', ':-D']", () => {
    expect(countSmileFace([":)", ";(", ";}", ":-D"])).toBe(2);
  });

  test("should return 3 for [';D', ':-(', ':-)', ';~)']", () => {
    expect(countSmileFace([";D", ":-(", ":-)", ";~)"])).toBe(3);
  });

  test("should return 1 for [';]', ':[', ';*', ':$', ';-D']", () => {
    expect(countSmileFace([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });
});
