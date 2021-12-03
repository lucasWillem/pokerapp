import { HandEvalutorsContext, StraighFlushEvaluator } from "../index";
import {
  mockLegitStraightFlush,
  mockStraightFlushHandNotInSequence,
  mockStraightFlushHandNotOfSameSuit,
  mockStraightFlushIsRoyalFlush,
} from "./mocks/mock-hands";

describe("straight-flush tests", () => {
  test("is a straight flush", () => {
    expect(
      new HandEvalutorsContext(
        new StraighFlushEvaluator(mockLegitStraightFlush)
      ).evaluate()
    ).toBe(true);
  });

  test("is not of same suit", () => {
    expect(
      new HandEvalutorsContext(
        new StraighFlushEvaluator(mockStraightFlushHandNotOfSameSuit)
      ).evaluate()
    ).toBe(false);
  });

  test("is not in sequence", () => {
    expect(
      new HandEvalutorsContext(
        new StraighFlushEvaluator(mockStraightFlushHandNotInSequence)
      ).evaluate()
    ).toBe(false);
  });

  test("is a royal flush", () => {
    expect(
      new HandEvalutorsContext(
        new StraighFlushEvaluator(mockStraightFlushIsRoyalFlush)
      ).evaluate()
    ).toBe(false);
  });
});
