import styled, { css } from "styled-components";
import { ColorOptions } from "@global/theme";

export interface StyledPokerTableProps {
  color?: ColorOptions;
}

const StyledPokerTable = styled.div<StyledPokerTableProps>(
  ({ theme, color = ColorOptions.Green }) =>
    css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      backgroundColor: theme.colors[color],
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      width: "80vw",
      height: "65vh",
      overflow: "auto",
      "::-webkit-scrollbar": {
        display: "none",
      },
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
      "@media (max-width: 1325px)": {
        height: "80vh",
        marginTop: 150,
      },
      "@media (max-width: 1000px)": {
        height: "100vh",
      },
    }),
);

export { StyledPokerTable };
