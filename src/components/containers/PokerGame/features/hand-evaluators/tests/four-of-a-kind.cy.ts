import {
  HandEvalutorsContext,
  FourOfAKindEvaluator,
} from "../../hand-evaluators";
import {
  mockLegitThreeOfAKind,
  mockLegitFourOfAKind,
  mockLegitFullHouse,
  mockHandLegitRoyalFlush,
  mockLegitFlush,
  mockLegitPair,
  mockLegitStraight,
  mockLegitStraightFlush,
  mockLegitTwoPair,
} from "./mocks/mock-hands";

describe("four-of-a-kind tests", () => {
  it("is four of a kind", () => {
    cy.wrap(
      new HandEvalutorsContext(
        new FourOfAKindEvaluator(mockLegitFourOfAKind),
      ).evaluate(),
    ).should("be.true");
  });

  const nonFourOfAKindMocks = [
    mockLegitFlush,
    mockLegitFullHouse,
    mockLegitPair,
    mockHandLegitRoyalFlush,
    mockLegitStraightFlush,
    mockLegitStraight,
    mockLegitTwoPair,
    mockLegitThreeOfAKind,
  ];

  nonFourOfAKindMocks.forEach((mockHand) => {
    it("is not four of a kind", () => {
      cy.wrap(
        new HandEvalutorsContext(new FourOfAKindEvaluator(mockHand)).evaluate(),
      ).should("be.false");
    });
  });
});
