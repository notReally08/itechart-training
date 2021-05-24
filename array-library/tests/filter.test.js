import { filter } from "./../src/modules/filter/filter";

describe("When we use the filter method with valid parameters", () => {
  it("returns the new array [2, 3, 4] out of given array [1, 2, 3, 4, 5] and callback put an element > 1 and < 5", () => {
    expect(filter([1, 2, 3, 4, 5], (a) => a > 1 && a < 5)).toEqual([2, 3, 4]);
  });

  it("returns an empty array out of given empty array", () => {
    expect(filter([], (a) => a > 1 && a < 5)).toEqual([]);
  });

  it("returns an empty array when all the elements do not pass the condition in the callback", () => {
    expect(filter([1, 2, 5], (a) => a > 5)).toEqual([]);
  });
})


