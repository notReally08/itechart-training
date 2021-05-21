import { map } from "./../src/modules/map/map";

test("the error should be thrown; the second parameter must be the function", () => {
  expect(() => map([], true)).toThrow(Error);
});

test("should be equal to [2, 3, 4, 5]", () => {
  expect(map([1, 2, 3, 4], (a) => a + 1)).toEqual([2, 3, 4, 5]);
});

test("should be an empty array", () => {
  expect(map([], (a) => a + 1)).toEqual([]);
});