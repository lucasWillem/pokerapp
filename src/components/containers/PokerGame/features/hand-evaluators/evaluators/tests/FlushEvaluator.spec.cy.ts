import { HandEvalutorsContext, FlushEvaluator } from "../..";
import {
  mockFlushSameSuitButInSequence,
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

describe("flush tests", () => {
  it("is a flush", () => {
    cy.wrap(
      new HandEvalutorsContext(new FlushEvaluator(mockLegitFlush)).evaluate(),
    ).should("be.true");
  });

  it("same suit but in sequence", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new FlushEvaluator(mockFlushSameSuitButInSequence),
      ).evaluate(),
    ).should("be.false");
  });

  const nonFlushMocks = [
    mockLegitFourOfAKind,
    mockLegitFullHouse,
    mockLegitPair,
    mockHandLegitRoyalFlush,
    mockLegitStraightFlush,
    mockLegitStraight,
    mockLegitTwoPair,
    mockLegitThreeOfAKind,
  ];

  nonFlushMocks.forEach((mockHand) => {
    it("is not a flush", () => {
      cy.wrap(
        new HandEvalutorsContext(new FlushEvaluator(mockHand)).evaluate(),
      ).should("be.false");
    });
  });
});
