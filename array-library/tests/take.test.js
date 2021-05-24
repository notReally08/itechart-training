import { take } from "./../src/modules/take/take";

describe("If we are using take method with valid number of items to take", () => {
  it("returns first three items when the number to take is 3", () => {
    expect(take([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
  });
  
  it("returns all array when the number to take is eaual to array length", () => {
    expect(take([7, 2, 9, 34], 4)).toEqual([7, 2, 9, 34]);
  });
})