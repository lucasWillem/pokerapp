import { HandEvalutorsContext, FullHouseEvaluator } from "../../index";
import {
  mockLegitFullHouse,
  mockHandLegitRoyalFlush,
  mockLegitFlush,
  mockLegitFourOfAKind,
  mockLegitStraight,
  mockLegitStraightFlush,
  mockLegitThreeOfAKind,
  mockLegitTwoPair,
  mockLegitPair,
} from "./mocks/mock-hands";

describe("full house tests", () => {
  it("is full house", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new FullHouseEvaluator(mockLegitFullHouse),
      ).evaluate(),
    ).should("be.true");
  });

  const nonFullHouseMocks = [
    mockLegitFlush,
    mockLegitFourOfAKind,
    mockLegitPair,
    mockHandLegitRoyalFlush,
    mockLegitStraightFlush,
    mockLegitStraight,
    mockLegitTwoPair,
    mockLegitThreeOfAKind,
  ];

  nonFullHouseMocks.forEach((mockHand) => {
    it("is not a full house", () => {
      cy.wrap(
        new HandEvalutorsContext(new FullHouseEvaluator(mockHand)).evaluate(),
      ).should("be.false");
    });
  });
});
