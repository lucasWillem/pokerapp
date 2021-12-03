import { Hand } from "../../../types";

export const mockHandLegit: Hand = [
  {
    number: 1,
    suit: "spades",
  },
  {
    number: 10,
    suit: "spades",
  },
  {
    number: 11,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockHandNotOfSameSuit: Hand = [
  {
    number: 1,
    suit: "spades",
  },
  {
    number: 10,
    suit: "clubs",
  },
  {
    number: 11,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockHandNotInSequence: Hand = [
  {
    number: 2,
    suit: "spades",
  },
  {
    number: 10,
    suit: "spades",
  },
  {
    number: 8,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];
