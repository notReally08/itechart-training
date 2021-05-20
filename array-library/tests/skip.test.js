/* eslint-disable */
import { skip } from "./../src/modules/skip/skip";

test("should be equal to [7, 2, 34]", () => {
  expect(skip([7, 2, 9, 34], 3)).toEqual([7, 2, 34]);
});