import { reduce } from "./../src/modules/reduce/reduce";

test("the error should be thrown; the second parameter must be the function", () => {
  expect(() => reduce("string", (a, b) => a + b)).toThrow(Error);
});

test("the error should be thrown; the second parameter must be the function", () => {
  expect(() => reduce([1, 2, 3, 4], true)).toThrow(Error);
});

test("the error should be thrown; the second parameter must be the function", () => {
  expect(() => reduce([], (a, b) => a + b)).toThrow(TypeError);
});

test("should be equal to 3", () => {
  expect(reduce([1], (a, b) => a + b, 2)).toEqual(3);
});

test("should be equal to 1", () => {
  expect(reduce([1], (a, b) => a + b)).toEqual(1);
});

test("should be equal to 7", () => {
  expect(reduce([], (a, b) => a + b, 7)).toEqual(7);
});

test("should be equal to 10", () => {
  expect(reduce([1, 2, 3, 4], (a, b) => a + b)).toEqual(10);
});