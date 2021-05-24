import { map } from "./../src/modules/map/map";

describe("The map method should throw an error", () => {
  it("throws a new Error if the callback parameter is not a function", () => {
    expect(() => map([], true)).toThrow(Error);
  });
})

describe("When we are using map method with valid parameters and callback increases the new array element by 1", () => {
  it("returns the new array [2, 3, 4, 5] when the array [1, 2, 3, 4] was given", () => {
    expect(map([1, 2, 3, 4], (a) => a + 1)).toEqual([2, 3, 4, 5]);
  });
  
  it("returns an empty array the empty array was given", () => {
    expect(map([], (a) => a + 1)).toEqual([]);
  });
})