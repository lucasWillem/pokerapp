import styled, { css } from "styled-components";

const StyledCard = styled.div(() =>
  css({
    height: 70,
    width: 45,
    borderRadius: "2px",
    backgroundColor: "white",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }),
);

const TopRow = styled.div(() =>
  css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 5,
  }),
);

const MiddleRow = styled.div(() =>
  css({
    display: "flex",
    justifyContent: "center",
  }),
);

const BottomRow = styled.div(() =>
  css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 5,
  }),
);

export { StyledCard, TopRow, MiddleRow, BottomRow };
