import styled, { css } from "styled-components";
import { Button, ButtonProps } from "react-bootstrap";
import { ColorOptions } from "@global/theme";
export interface StyledButtonProps extends ButtonProps {
  color?: ColorOptions;
}

const StyledButton = styled(Button)<StyledButtonProps>(({
  theme,
  color = ColorOptions.Green,
}) => {
  const backgroundColor = theme.colors["black"];

  return css({
    margin: "8px",
    backgroundColor,
    borderColor: theme.colors[color],
    borderWidth: "0.02rem",
    "--bs-btn-active-bg": theme.colors[color],
    "--bs-btn-active-border-color": theme.colors[color],
    "&:hover": {
      backgroundColor,
      borderColor: theme.colors[color],
    },
    "&:disabled": {
      backgroundColor,
      borderColor: theme.colors["red"],
    },
  });
});

export { StyledButton };
