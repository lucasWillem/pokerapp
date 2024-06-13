import styled, { css } from 'styled-components';

const PokerGame = styled.div(() =>
  css({
    height: '100vh',
    width: '100%',
  }),
);

const PlayerSelectionFlexWrapper = styled.div(() =>
  css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '50px',
  }),
);

const BottomActionButtonsContainer = styled.div(() =>
  css({
    margin: '50px',
  }),
);

const PokerHand = styled.div(() =>
  css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }),
);

export {
  PokerGame,
  PlayerSelectionFlexWrapper,
  BottomActionButtonsContainer,
  PokerHand,
};
