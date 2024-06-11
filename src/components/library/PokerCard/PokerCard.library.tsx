import { FC, memo } from 'react';
import type { Card } from '../../../global/types';
import { StyledCard, TopRow, BottomRow, MiddleRow } from './PokerCard.styles';

import {
  SuitClubFill,
  SuitDiamondFill,
  SuitSpadeFill,
  SuitHeartFill,
} from 'react-bootstrap-icons';

interface PokerCardProps {
  pokerCard: Card;
}

const PokerCard: FC<PokerCardProps> = ({ pokerCard }) => {
  const renderSuite = () => {
    if (pokerCard.suit === 'spades') {
      return <SuitSpadeFill style={{ fontSize: 25 }} />;
    }

    if (pokerCard.suit === 'clubs') {
      return <SuitClubFill style={{ fontSize: 25 }} />;
    }

    if (pokerCard.suit === 'hearts') {
      return <SuitHeartFill style={{ fontSize: 25 }} />;
    }

    if (pokerCard.suit === 'diamonds') {
      return <SuitDiamondFill style={{ fontSize: 25 }} />;
    }
  };

  const renderNumber = () => {
    if (pokerCard.number === 1) {
      return 'A';
    }

    if (pokerCard.number === 11) {
      return 'J';
    }

    if (pokerCard.number === 12) {
      return 'Q';
    }

    if (pokerCard.number === 13) {
      return 'K';
    }
    return pokerCard.number;
  };

  return (
    <StyledCard>
      <TopRow>{renderNumber()}</TopRow>
      <MiddleRow>{renderSuite()}</MiddleRow>
      <BottomRow>{renderNumber()}</BottomRow>
    </StyledCard>
  );
};

export default memo(PokerCard);
