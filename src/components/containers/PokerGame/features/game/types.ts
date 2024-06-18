export const enum WinningHand {
  RoyalFlush = "Royal Flush",
  StraightFlush = "Straight Flush",
  FourOfAKind = "Four of a Kind",
  FullHouse = "Full House",
  Flush = "Flush",
  Straight = "Straight",
  ThreeOfAKind = "Three of a Kind",
  TwoPair = "Two Pair",
  Pair = "Pair",
  HighCard = "High Card",
}

export type PlayerRank = { player: number; rank: number; name: WinningHand };
