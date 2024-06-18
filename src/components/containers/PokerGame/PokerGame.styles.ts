import styled, { css } from "styled-components";

const StyledPokerGame = styled.div(() =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    minHeight: "100vh",
  }),
);

const PlayerSelectionFlexWrapper = styled.div(() =>
  css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  }),
);

const BottomActionButtonsContainer = styled.div(() =>
  css({
    marginTop: 24,
  }),
);

const PokerHand = styled.div(() =>
  css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  }),
);

export {
  StyledPokerGame,
  PlayerSelectionFlexWrapper,
  BottomActionButtonsContainer,
  PokerHand,
};
