/* eslint-disable */
import { take } from "./../src/modules/take/take";

test("should be equal to [1, 2, 3]", () => {
  expect(take([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
});