/* eslint-disable */
import { reduce } from "./../src/modules/reduce/reduce";

test("should be equal to 10", () => {
  expect(reduce([1, 2, 3, 4], (a, b) => a + b)).toEqual(10);
});