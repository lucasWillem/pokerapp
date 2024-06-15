import styled, { css } from "styled-components";
import { AlertProps, Alert as BootstrapAlert } from "react-bootstrap";
import { ColorOptions } from "@global/theme";

export interface StyledAlertProps extends AlertProps {
  color?: ColorOptions;
}

const StyledAlert = styled(BootstrapAlert)<StyledAlertProps>(
  ({ theme, color = ColorOptions.Green }) =>
    css({
      position: "fixed",
      top: "24px",
      left: "30%",
      right: "30%",
      zIndex: 2,
      backgroundColor: theme.colors.black,
      border: `2px solid ${theme.colors[color]}`,
      color: theme.colors.light,
      ".btn-close": {
        display: "none",
      },
    }),
);

export { StyledAlert };
