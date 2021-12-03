import { HandEvalutorsContext, ThreeOfAKindEvaluator } from "../index";
import {
  mockLegitThreeOfAKind,
  mockLegitFourOfAKind,
} from "./mocks/mock-hands";

describe("three-of-a-kind tests", () => {
  test("is a three of a kind", () => {
    expect(
      new HandEvalutorsContext(
        new ThreeOfAKindEvaluator(mockLegitThreeOfAKind)
      ).evaluate()
    ).toBe(true);
  });

  test("is a four of a kind", () => {
    expect(
      new HandEvalutorsContext(
        new ThreeOfAKindEvaluator(mockLegitFourOfAKind)
      ).evaluate()
    ).toBe(false);
  });
});
