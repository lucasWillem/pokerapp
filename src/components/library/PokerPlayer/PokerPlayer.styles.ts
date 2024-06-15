import styled, { css } from "styled-components";
import { animated, SpringValue } from "react-spring";

interface StyledPokerPlayerProps {
  style: {
    opacity: SpringValue<number>;
  };
}

const StyledPokerPlayer = styled(animated.div)<StyledPokerPlayerProps>(() =>
  css({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    margin: "20px",
  }),
);

const PlayerName = styled.div(({ theme }) =>
  css({
    textAlign: "left",
    fontSize: "1rem",
    marginBottom: "8px",
    color: theme.colors.gold,
  }),
);

export { StyledPokerPlayer, PlayerName };
