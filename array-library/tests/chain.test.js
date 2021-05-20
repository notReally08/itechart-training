/* eslint-disable */
import { chain } from "./../src/modules/chain/chain";

test("should be equal to [2]", () => {
  expect(chain([1, 2, 3]).take(2).skip(1).value()).toEqual([2]);
});