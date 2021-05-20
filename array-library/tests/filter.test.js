/* eslint-disable */
import { filter } from "./../src/modules/filter/filter";

test("should be equal to [2, 3, 4]", () => {
  expect(filter([1, 2, 3, 4, 5], (a) => a > 1 && a < 5)).toEqual([2, 3, 4]);
});