import { HandEvalutorsContext, ThreeOfAKindEvaluator } from "../../index";
import {
  mockLegitThreeOfAKind,
  mockLegitFourOfAKind,
  mockHandLegitRoyalFlush,
  mockLegitFlush,
  mockLegitFullHouse,
  mockLegitPair,
  mockLegitStraight,
  mockLegitStraightFlush,
  mockLegitTwoPair,
} from "./mocks/mock-hands";

describe("three-of-a-kind tests", () => {
  it("is a three of a kind", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new ThreeOfAKindEvaluator(mockLegitThreeOfAKind),
      ).evaluate(),
    ).should("be.true");
  });

  const nonThreeOfAKindMocks = [
    mockLegitFlush,
    mockLegitFourOfAKind,
    mockLegitFullHouse,
    mockLegitPair,
    mockHandLegitRoyalFlush,
    mockLegitStraightFlush,
    mockLegitStraight,
    mockLegitTwoPair,
  ];

  nonThreeOfAKindMocks.forEach((mockHand) => {
    it("is not a three of a kind", () => {
      cy.wrap(
        new HandEvalutorsContext(
          new ThreeOfAKindEvaluator(mockHand),
        ).evaluate(),
      ).should("be.false");
    });
  });
});
