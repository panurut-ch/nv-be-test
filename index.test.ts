import { getPermutations } from "./index";

describe("getPermutations", () => {
  test("should return all permutations for 'a'", () => {
    expect(getPermutations("a").sort()).toEqual(["a"]);
  });

  test("should return all permutations for 'ab'", () => {
    expect(getPermutations("ab").sort()).toEqual(["ab", "ba"]);
  });

  test("should return all permutations for 'abc'", () => {
    expect(getPermutations("abc").sort()).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });

  test("should return all permutations for 'aabb'", () => {
    expect(getPermutations("aabb").sort()).toEqual([
      "aabb",
      "abab",
      "abba",
      "baab",
      "baba",
      "bbaa",
    ]);
  });
});
