import { HandEvalutorsContext, StraightEvaluator } from "../index";
import { mockLegitStraight, mockLegitStraightFlush } from "./mocks/mock-hands";

describe("straight tests", () => {
  test("is a straight", () => {
    expect(
      new HandEvalutorsContext(
        new StraightEvaluator(mockLegitStraight),
      ).evaluate(),
    ).toBe(true);
  });

  test("is actually a straight flush", () => {
    expect(
      new HandEvalutorsContext(
        new StraightEvaluator(mockLegitStraightFlush),
      ).evaluate(),
    ).toBe(false);
  });
});
