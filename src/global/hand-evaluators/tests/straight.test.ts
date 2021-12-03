import { HandEvalutorsContext, StraightEvaluator } from "../index";
import {
  mockLegitStraight,
  mockStraightIsActuallyStraightFlush,
} from "./mocks/mock-hands";

describe("four-of-a-kind tests", () => {
  test("is a straight", () => {
    expect(
      new HandEvalutorsContext(
        new StraightEvaluator(mockLegitStraight)
      ).evaluate()
    ).toBe(true);
  });

  test("is actually a straight flush", () => {
    expect(
      new HandEvalutorsContext(
        new StraightEvaluator(mockStraightIsActuallyStraightFlush)
      ).evaluate()
    ).toBe(false);
  });
});
