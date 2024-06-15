import { HandEvalutorsContext, RoyalFlushEvaluator } from "../index";
import {
  mockHandLegitRoyalFlush,
  mockRoyalFlushHandNotInSequence,
  mockRoyalFlushHandNotOfSameSuit,
} from "./mocks/mock-hands";

describe("royal-flush tests", () => {
  test("is a royal flush", () => {
    expect(
      new HandEvalutorsContext(
        new RoyalFlushEvaluator(mockHandLegitRoyalFlush),
      ).evaluate(),
    ).toBe(true);
  });

  test("is not of same suit", () => {
    expect(
      new HandEvalutorsContext(
        new RoyalFlushEvaluator(mockRoyalFlushHandNotOfSameSuit),
      ).evaluate(),
    ).toBe(false);
  });

  test("is not in sequence", () => {
    expect(
      new HandEvalutorsContext(
        new RoyalFlushEvaluator(mockRoyalFlushHandNotInSequence),
      ).evaluate(),
    ).toBe(false);
  });
});
