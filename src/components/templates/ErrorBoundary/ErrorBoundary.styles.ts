import { ColorOptions } from "@global/theme";
import { Alert } from "react-bootstrap";
import styled, { css } from "styled-components";

const StyledErrorBoundaryWrapper = styled("div")(({ theme }) =>
  css({
    background: theme.colors.black,
    height: "100vh",
  }),
);

const StyledErrorFallback = styled(Alert)(({ theme }) =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20vh auto",
    width: "50%",
    backgroundColor: theme.colors[ColorOptions.Black],
    border: `1px solid ${theme.colors[ColorOptions.Red]}`,
  }),
);

const StyledAlertHeading = styled(Alert.Heading)(({ theme }) =>
  css({
    color: theme.colors.light,
  }),
);

const StyledMessage = styled("p")(({ theme }) =>
  css({
    color: theme.colors.light,
  }),
);

export {
  StyledErrorBoundaryWrapper,
  StyledErrorFallback,
  StyledAlertHeading,
  StyledMessage,
};
