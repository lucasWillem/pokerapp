import styled, { css } from 'styled-components';
import { Button, ButtonProps } from 'react-bootstrap';

export enum ButtonColors {
  Black = 'black',
  Red = 'red',
  Green = 'green',
  Gold = 'gold',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Light = 'light',
}

export interface StyledButtonProps extends ButtonProps {
  color?: ButtonColors;
  borderColor?: ButtonColors;
}

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, color = ButtonColors.Black, borderColor = ButtonColors.Black }) =>
    css({
      margin: '8px',
      backgroundColor: theme.colors[color],
      borderColor: theme.colors[borderColor],
      borderWidth: '2px',
      '--bs-btn-active-bg': theme.colors[color],
      '--bs-btn-active-border-color': theme.colors[color],
      '&:hover': {
        backgroundColor: theme.colors[color],
        borderColor: theme.colors[borderColor],
      },
      '&:disabled': {
        backgroundColor: theme.colors[color],
        borderColor: theme.colors[borderColor],
      },
    }),
);

export { StyledButton };
