import { HandEvalutorsContext, ThreeOfAKindEvaluator } from "../index";
import {
  mockLegitThreeOfAKind,
  mockLegitFourOfAKind,
} from "./mocks/mock-hands";

describe("four-of-a-kind tests", () => {
  test("is a straight", () => {
    expect(
      new HandEvalutorsContext(
        new ThreeOfAKindEvaluator(mockLegitThreeOfAKind)
      ).evaluate()
    ).toBe(true);
  });

  test("is actually a straight flush", () => {
    expect(
      new HandEvalutorsContext(
        new ThreeOfAKindEvaluator(mockLegitFourOfAKind)
      ).evaluate()
    ).toBe(false);
  });
});
