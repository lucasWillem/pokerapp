import { HandEvalutorsContext, RoyalFlushEvaluator } from "../index";
import {
  mockHandLegit,
  mockHandNotInSequence,
  mockHandNotOfSameSuit,
} from "./mocks/mock-hands";

describe("royal-flush tests", () => {
  test("is a royal flush", () => {
    expect(
      new HandEvalutorsContext(
        new RoyalFlushEvaluator(mockHandLegit)
      ).evaluate()
    ).toBe(true);
  });

  test("is not of same suit", () => {
    expect(
      new HandEvalutorsContext(
        new RoyalFlushEvaluator(mockHandNotOfSameSuit)
      ).evaluate()
    ).toBe(false);
  });

  test("is not in sequence", () => {
    expect(
      new HandEvalutorsContext(
        new RoyalFlushEvaluator(mockHandNotInSequence)
      ).evaluate()
    ).toBe(false);
  });
});
