import { chain } from "./../src/modules/chain/chain";

describe("When we use the chain method with valid parameter and correct method chain", () => {
  it("returns array [2] out of [1, 2, 3] and chain methods", () => {
    expect(chain([1, 2, 3]).take(2).skip(1).value()).toEqual([2]);
  });
});