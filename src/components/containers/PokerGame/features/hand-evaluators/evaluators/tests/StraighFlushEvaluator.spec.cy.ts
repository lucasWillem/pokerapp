import { HandEvalutorsContext, StraighFlushEvaluator } from "../../index";
import {
  mockLegitStraightFlush,
  mockStraightFlushHandNotInSequence,
  mockStraightFlushHandNotOfSameSuit,
  mockHandLegitRoyalFlush,
  mockLegitFlush,
  mockLegitFourOfAKind,
  mockLegitFullHouse,
  mockLegitPair,
  mockLegitThreeOfAKind,
  mockLegitTwoPair,
  mockLegitStraight,
} from "./mocks/mock-hands";

describe("straight-flush tests", () => {
  it("is a straight flush", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new StraighFlushEvaluator(mockLegitStraightFlush),
      ).evaluate(),
    ).should("be.true");
  });

  it("is not of same suit", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new StraighFlushEvaluator(mockStraightFlushHandNotOfSameSuit),
      ).evaluate(),
    ).should("be.false");
  });

  it("is not in sequence", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new StraighFlushEvaluator(mockStraightFlushHandNotInSequence),
      ).evaluate(),
    ).should("be.false");
  });

  const nonStraightFlushMocks = [
    mockLegitFlush,
    mockLegitFourOfAKind,
    mockLegitFullHouse,
    mockLegitPair,
    mockHandLegitRoyalFlush,
    mockLegitStraight,
    mockLegitTwoPair,
    mockLegitThreeOfAKind,
  ];

  nonStraightFlushMocks.forEach((mockHand) => {
    it("is not a straight flush", () => {
      cy.wrap(
        new HandEvalutorsContext(
          new StraighFlushEvaluator(mockHand),
        ).evaluate(),
      ).should("be.false");
    });
  });
});
