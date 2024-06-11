import { HandEvalutorsContext, FourOfAKindEvaluator } from '../index';
import {
  mockLegitThreeOfAKind,
  mockLegitFourOfAKind,
} from './mocks/mock-hands';

describe('four-of-a-kind tests', () => {
  test('is four of a kind', () => {
    expect(
      new HandEvalutorsContext(
        new FourOfAKindEvaluator(mockLegitFourOfAKind),
      ).evaluate(),
    ).toBe(true);
  });

  test('is three of a kind', () => {
    expect(
      new HandEvalutorsContext(
        new FourOfAKindEvaluator(mockLegitThreeOfAKind),
      ).evaluate(),
    ).toBe(false);
  });
});
