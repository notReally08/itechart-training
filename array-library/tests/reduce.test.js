import { reduce } from "./../src/modules/reduce/reduce";

describe("The reduce method should throw an error", () => { 
  it("throws a new Error if the array to reduce is empty and no initialValue is was given", () => {
    expect(() => reduce([], (a, b) => a + b)).toThrow(TypeError);
  });
});

describe("If we use the reduce method with the valid parameters and callback that gives the sum of array items", () => {
  it("returns number 3 with the array [1] and initial value 2", () => {
    expect(reduce([1], (a, b) => a + b, 2)).toEqual(3);
  });

  it("returns number 1 with the array [1] and no initial value", () => {
    expect(reduce([1], (a, b) => a + b)).toEqual(1);
  });

  it("returns number 7 with the empty array and initial value 7", () => {
    expect(reduce([], (a, b) => a + b, 7)).toEqual(7);
  });

  it("returns number 10 with the array [1, 2, 3, 4] and no initial value", () => {
    expect(reduce([1, 2, 3, 4], (a, b) => a + b)).toEqual(10);
  });
})
