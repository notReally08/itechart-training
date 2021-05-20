/* eslint-disable */
import { map } from "./../src/modules/map/map";

test("should be equal to [2, 3, 4, 5]", () => {
  expect(map([1, 2, 3, 4], (a) => a + 1)).toEqual([2, 3, 4, 5]);
});