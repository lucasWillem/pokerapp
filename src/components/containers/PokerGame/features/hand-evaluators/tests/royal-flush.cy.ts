import { HandEvalutorsContext, RoyalFlushEvaluator } from "../index";
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
  mockRoyalFlushHandNotInSequence,
  mockRoyalFlushHandNotOfSameSuit,
} from "./mocks/mock-hands";

describe("royal-flush tests", () => {
  it("is a royal flush", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new RoyalFlushEvaluator(mockHandLegitRoyalFlush),
      ).evaluate(),
    ).should("be.true");
  });

  it("is not of same suit", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new RoyalFlushEvaluator(mockRoyalFlushHandNotOfSameSuit),
      ).evaluate(),
    ).should("be.false");
  });

  it("is not in sequence", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new RoyalFlushEvaluator(mockRoyalFlushHandNotInSequence),
      ).evaluate(),
    ).should("be.false");
  });

  const nonRoyalFlushMocks = [
    mockLegitFlush,
    mockLegitFourOfAKind,
    mockLegitFullHouse,
    mockLegitPair,
    mockLegitStraightFlush,
    mockLegitStraight,
    mockLegitTwoPair,
    mockLegitThreeOfAKind,
  ];

  nonRoyalFlushMocks.forEach((mockHand) => {
    it("is not a royal flush", () => {
      cy.wrap(
        new HandEvalutorsContext(new RoyalFlushEvaluator(mockHand)).evaluate(),
      ).should("be.false");
    });
  });
});
