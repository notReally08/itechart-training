import { take } from "./../src/modules/take/take";

test("the error should be thrown; the second parameter must be the number", () => {
  expect(() => take([], true)).toThrow(Error);
});

test("the error should be thrown", () => {
  expect(() => take([7, 2, 9, 34], 5)).toThrow(Error);
});

test("should be equal to [1, 2, 3]", () => {
  expect(take([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
});

test("should be an empty array", () => {
  expect(take([7, 2, 9, 34], 4)).toEqual([7, 2, 9, 34]);
});