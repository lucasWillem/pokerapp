import { HandEvalutorsContext, FullHouseEvaluator } from "../index";
import {
  mockLegitFullHouse,
  mockFullHouseMissingAPair,
  mockFullHouseMissingThreeOfAKind,
} from "./mocks/mock-hands";

describe("full house tests", () => {
  test("is full house", () => {
    expect(
      new HandEvalutorsContext(
        new FullHouseEvaluator(mockLegitFullHouse),
      ).evaluate(),
    ).toBe(true);
  });

  test("missing a pair", () => {
    expect(
      new HandEvalutorsContext(
        new FullHouseEvaluator(mockFullHouseMissingAPair),
      ).evaluate(),
    ).toBe(false);
  });

  test("missing a three of a kind", () => {
    expect(
      new HandEvalutorsContext(
        new FullHouseEvaluator(mockFullHouseMissingThreeOfAKind),
      ).evaluate(),
    ).toBe(false);
  });
});
