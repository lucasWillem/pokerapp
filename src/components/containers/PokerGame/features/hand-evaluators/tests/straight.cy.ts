import { HandEvalutorsContext, StraightEvaluator } from "../index";
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

describe("straight tests", () => {
  it("is a straight", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new StraightEvaluator(mockLegitStraight),
      ).evaluate(),
    ).should("be.true");
  });

  const nonStraightMocks = [
    mockLegitFlush,
    mockLegitFourOfAKind,
    mockLegitFullHouse,
    mockLegitPair,
    mockHandLegitRoyalFlush,
    mockLegitStraightFlush,
    mockLegitTwoPair,
    mockLegitThreeOfAKind,
  ];

  nonStraightMocks.forEach((mockHand) => {
    it("is not a straight", () => {
      cy.wrap(
        new HandEvalutorsContext(new StraightEvaluator(mockHand)).evaluate(),
      ).should("be.false");
    });
  });
});
