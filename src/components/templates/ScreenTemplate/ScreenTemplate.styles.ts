import styled, { css } from "styled-components";

const StyledScreenTemplate = styled("div")(({ theme }) =>
  css({
    background: theme.colors.black,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
  }),
);

export { StyledScreenTemplate };
