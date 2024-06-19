import React, { FC, memo, useCallback, useState } from "react";

import Game from "./features/game";
import {
  StyledPokerGame,
  PlayerSelectionFlexWrapper,
  BottomActionButtonsContainer,
  PokerHand,
} from "./PokerGame.styles";

import type { Hand } from "./PokerGame.types";
import { PokerTable } from "@/components/containers/PokerGame/presentational/PokerTable";
import { PokerCard } from "@/components/containers/PokerGame/presentational/PokerCard";
import { PokerPlayer } from "@/components/containers/PokerGame/presentational/PokerPlayer";

import { useStoreActions, useStoreState } from "@/redux/index";
import { Button } from "@/components/library/Button";
import { ColorOptions } from "@/global/theme";
import { DropDownMenu } from "@/components/library/DropDownMenu";
import { NUM_PLAYER_OPTIONS } from "./constants";

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
    configureAlert({ isVisible: false, message: "" });
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
    <StyledPokerGame>
      <>
        {pokerHands.length === 0 ? (
          <PlayerSelectionFlexWrapper>
            <DropDownMenu
              title={
                numberOfPlayers > 0
                  ? `${numberOfPlayers}`
                  : "Select Number Of Players"
              }
              menuItems={NUM_PLAYER_OPTIONS}
              makeSelection={storeNumberOfPlayers}
              activeItem={numberOfPlayers}
            />
            <Button disabled={numberOfPlayers === 0} onClick={startGame}>
              Start game
            </Button>
          </PlayerSelectionFlexWrapper>
        ) : (
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
        )}
      </>
    </StyledPokerGame>
  );
};

export default memo(GameContainer);
