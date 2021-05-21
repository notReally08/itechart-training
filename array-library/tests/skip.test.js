import { skip } from "./../src/modules/skip/skip";

test("the error should be thrown; the second parameter must be the number", () => {
  expect(() => skip([], true)).toThrow(Error);
});

test("the error should be thrown", () => {
  expect(() => skip([7, 2, 9, 34], 5)).toThrow(Error);
});

test("should be equal to [34]", () => {
  expect(skip([7, 2, 9, 34], 3)).toEqual([34]);
});

test("should be an empty array", () => {
  expect(skip([7, 2, 9, 34], 4)).toEqual([]);
});