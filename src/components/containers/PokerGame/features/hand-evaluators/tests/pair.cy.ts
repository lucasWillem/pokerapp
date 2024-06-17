import { HandEvalutorsContext, PairEvaluator } from "../index";
import {
  mockHandLegitRoyalFlush,
  mockLegitFlush,
  mockLegitFourOfAKind,
  mockLegitFullHouse,
  mockLegitPair,
  mockLegitStraight,
  mockLegitStraightFlush,
  mockLegitThreeOfAKind,
  mockLegitTwoPair,
} from "./mocks/mock-hands";

describe("pair tests", () => {
  it("is a pair", () => {
    cy.wrap(
      new HandEvalutorsContext(new PairEvaluator(mockLegitPair)).evaluate(),
    ).should("be.true");
  });

  const nonPairMocks = [
    mockLegitFlush,
    mockLegitFourOfAKind,
    mockLegitFullHouse,
    mockHandLegitRoyalFlush,
    mockLegitStraightFlush,
    mockLegitStraight,
    mockLegitTwoPair,
    mockLegitThreeOfAKind,
  ];

  nonPairMocks.forEach((mockHand) => {
    it("is not a pair", () => {
      cy.wrap(
        new HandEvalutorsContext(new PairEvaluator(mockHand)).evaluate(),
      ).should("be.false");
    });
  });
});
