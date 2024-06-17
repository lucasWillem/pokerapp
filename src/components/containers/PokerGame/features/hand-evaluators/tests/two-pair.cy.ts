import { HandEvalutorsContext, TwoPairEvaluator } from "../index";
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

describe("two pair tests", () => {
  it("is a two pair", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new TwoPairEvaluator(mockLegitTwoPair),
      ).evaluate(),
    ).should("be.true");
  });

  const nonTwoPairMocks = [
    mockLegitFlush,
    mockLegitFourOfAKind,
    mockLegitFullHouse,
    mockLegitPair,
    mockHandLegitRoyalFlush,
    mockLegitStraightFlush,
    mockLegitStraight,
    mockLegitThreeOfAKind,
  ];

  nonTwoPairMocks.forEach((mockHand) => {
    it("is not a two pair", () => {
      cy.wrap(
        new HandEvalutorsContext(new TwoPairEvaluator(mockHand)).evaluate(),
      ).should("be.false");
    });
  });
});
