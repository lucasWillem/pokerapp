import styled, { css } from "styled-components";
import { Container } from "react-bootstrap";

const StyledScreenTemplate = styled(Container)(({ theme }) =>
  css({
    paddingTop: "15%",
    paddingLeft: 50,
    paddingRight: 50,
    background: theme.colors.black,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),
);

export { StyledScreenTemplate };
