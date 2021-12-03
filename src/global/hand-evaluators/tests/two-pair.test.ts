import { HandEvalutorsContext, PairEvaluator } from "../index";
import { mockLegitTwoPair } from "./mocks/mock-hands";

describe("two pair tests", () => {
  test("is a two pair", () => {
    expect(
      new HandEvalutorsContext(new PairEvaluator(mockLegitTwoPair)).evaluate()
    ).toBe(true);
  });
});
