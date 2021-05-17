import { sumTwoNum } from "./dist/main.js";

describe("sumTwoNum tests", () => {
  it("shouldadd two numbers together", () => {
    const result = sumTwoNum(5, 10);

    expect(result).toBe(15);
  })
})