import React, { FC, memo, useCallback, useState } from 'react';

import Game from './features/game';
import {
  PokerGame,
  PlayerSelectionFlexWrapper,
  BottomActionButtonsContainer,
  PokerHand,
} from './PokerGame.styles';

import { Hand } from '@global/types';

import { PokerTable } from '@components/library/PokerTable';
import { PokerCard } from '@components/library/PokerCard';
import { PokerPlayer } from '@components/library/PokerPlayer';

import { useStoreActions, useStoreState } from '@redux/index';
import { Button } from '@components/library/Button';
import { ColorOptions } from '@global/theme';
import { Dropdown } from '@components/library/Dropdown';

const GameContainer: FC = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);

  const storeHands = useStoreActions(
    (actions) => actions.playersHands.storePokerHands,
  );

  const clearHands = useStoreActions(
    (actions) => actions.playersHands.clearPokerHands,
  );

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

  const storeWinners = useStoreActions(
    (actions) => actions.winners.storeWinners,
  );

  const clearWinners = useStoreActions(
    (actions) => actions.winners.clearWinners,
  );

  const pokerHands = useStoreState((state) => state.playersHands.pokerHands);

  const winners = useStoreState((state) => state.winners.winners);

  const startGame = useCallback(() => {
    const hands = Game.getHands({ noOfPlayers: numberOfPlayers });
    storeHands(hands);
  }, [numberOfPlayers, storeHands]);

  const storeNumberOfPlayers = useCallback(
    (menuItem: React.SetStateAction<number>) => {
      setNumberOfPlayers(menuItem);
    },
    [],
  );

  const handleDetermineWinner = useCallback(() => {
    const message = Game.determineWinner(pokerHands);
    const winners = message?.match(/\d+/g)?.map(Number);

    if (!message || !winners) return;

    storeWinners(winners);
    configureAlert({ isVisible: true, message, color: ColorOptions.Success });
  }, [configureAlert, pokerHands, storeWinners]);

  const getCardVisibility = (index: number, playerNumber: number) => {
    if (winners?.length === 0) return true;

    return winners.includes(playerNumber);
  };

  const handleReplay = useCallback(() => {
    configureAlert({ isVisible: false, message: '' });
    clearHands();
    clearWinners();
    setNumberOfPlayers(0);
  }, [clearHands, clearWinners, configureAlert]);

  const renderHand = useCallback(
    ({ hand, index }: { hand: Hand; index: number }) => {
      return (
        <PokerHand key={`${index}`}>
          {hand.map((pokerCard, index) => (
            <PokerCard key={`${hand}-${index}`} pokerCard={pokerCard} />
          ))}
        </PokerHand>
      );
    },
    [],
  );

  return (
    <PokerGame>
      <>
        {pokerHands.length === 0 && (
          <PlayerSelectionFlexWrapper>
            <Dropdown
              title={
                numberOfPlayers > 0
                  ? `${numberOfPlayers}`
                  : 'Select Number Of Players'
              }
              menuItems={[2, 3, 4, 5, 6]}
              makeSelection={storeNumberOfPlayers}
              activeItem={numberOfPlayers}
            />
            <Button disabled={numberOfPlayers === 0} onClick={startGame}>
              Start game
            </Button>
          </PlayerSelectionFlexWrapper>
        )}
        <>
          <PokerTable>
            {pokerHands.map((hand, index) => {
              const playerNumber = index + 1;
              return (
                <PokerPlayer
                  key={`${hand}-${index}`}
                  name={`Player ${playerNumber}`}
                  hand={hand}
                  renderHand={renderHand}
                  index={index}
                  shouldRenderCard={getCardVisibility(index, playerNumber)}
                />
              );
            })}
          </PokerTable>

          <BottomActionButtonsContainer>
            {pokerHands.length > 0 && (
              <Button
                onClick={handleDetermineWinner}
                disabled={winners.length > 0}
              >
                Determine Winner
              </Button>
            )}
            {pokerHands.length > 0 && (
              <Button onClick={handleReplay} disabled={winners.length === 0}>
                Replay
              </Button>
            )}
          </BottomActionButtonsContainer>
        </>
      </>
    </PokerGame>
  );
};

export default memo(GameContainer);
