import { HandEvalutorsContext, FlushEvaluator } from "../index";
import {
  mockFlushSameSuitButInSequence,
  mockLegitFlush,
} from "./mocks/mock-hands";

describe("flush tests", () => {
  test("is a flush", () => {
    expect(
      new HandEvalutorsContext(new FlushEvaluator(mockLegitFlush)).evaluate()
    ).toBe(true);
  });

  test("same suit but in sequence", () => {
    expect(
      new HandEvalutorsContext(
        new FlushEvaluator(mockFlushSameSuitButInSequence)
      ).evaluate()
    ).toBe(false);
  });
});
