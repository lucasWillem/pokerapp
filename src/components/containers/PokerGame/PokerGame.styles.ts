import styled, { DefaultTheme } from "styled-components";
import { Button as BootstrapButton, ButtonProps } from "react-bootstrap";

interface StyledButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline-primary";
}

const StyledButton = styled(BootstrapButton).attrs<StyledButtonProps>(
  (props) => ({
    variant: props.variant,
  })
)<{ theme: DefaultTheme }>`
  margin: 8px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-color: ${(props) => props.theme.colors.secondary};
  border-width: 2px;
  &:hover {
    border-width: 2px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.dark};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.dark};
    border-color: ${(props) => props.theme.colors.dark};
  }
  &:focus,
  &:active {
    box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.accent} !important;
  }
`;

const PokerGame = styled.div`
  height: 100vh;
  width: 100%;
`;

const PlayerSelectionFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

const BottomActionButtonsContainer = styled.div`
  margin: 50px;
`;

const PokerHand = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export {
  StyledButton,
  PokerGame,
  PlayerSelectionFlexWrapper,
  BottomActionButtonsContainer,
  PokerHand,
};
