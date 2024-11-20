import { getFindOdd } from "./indextwo";

describe("getFindOdd", () => {
  test("should return 7 for [7]", () => {
    expect(getFindOdd([7])).toBe(7);
  });

  test("should return 0 for [0]", () => {
    expect(getFindOdd([0])).toBe(0);
  });

  test("should return 2 for [1,1,2]", () => {
    expect(getFindOdd([1, 1, 2])).toBe(2);
  });

  test("should return 0 for [0,1,0,1,0]", () => {
    expect(getFindOdd([0, 1, 0, 1, 0])).toBe(0);
  });

  test("should return 4 for [1,2,2,3,3,3,4,3,3,3,2,2,1]", () => {
    expect(getFindOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });
});
