import { filter } from "./../src/modules/filter/filter";

test("the error should be thrown; the second parameter must be the function", () => {
  expect(() => filter([], true)).toThrow(Error);
});

test("should be equal to [2, 3, 4]", () => {
  expect(filter([1, 2, 3, 4, 5], (a) => a > 1 && a < 5)).toEqual([2, 3, 4]);
});

test("should be an empty array", () => {
  expect(filter([], (a) => a > 1 && a < 5)).toEqual([]);
});

test("should be an empty array", () => {
  expect(filter([1, 2, 5], (a) => a > 5)).toEqual([]);
});