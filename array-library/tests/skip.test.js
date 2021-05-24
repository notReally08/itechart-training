import { skip } from "./../src/modules/skip/skip";

describe("If we are using the skip method with the valid number of items to skip", () => {
  it("returns an array with the last item when the number to skip is less by 1 than the length of the array", () => {
    expect(skip([7, 2, 9, 34], 3)).toEqual([34]);
  });

  it("returns an empty array when the number of items to skip is equal to the array length", () => {
    expect(skip([7, 2, 9, 34], 4)).toEqual([]);
  });
})