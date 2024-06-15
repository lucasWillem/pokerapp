import { HandEvalutorsContext, PairEvaluator } from "../index";
import { mockLegitPair } from "./mocks/mock-hands";

describe("pair tests", () => {
  test("is a pair", () => {
    expect(
      new HandEvalutorsContext(new PairEvaluator(mockLegitPair)).evaluate(),
    ).toBe(true);
  });
});
