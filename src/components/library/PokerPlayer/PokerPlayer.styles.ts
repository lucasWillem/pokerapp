import styled, { DefaultTheme } from "styled-components";
import { animated } from 'react-spring';

interface StyledPokerPlayerProps {
  theme: DefaultTheme;
  style: any;
}

const StyledPokerPlayer = styled(animated.div)<StyledPokerPlayerProps>`
  display: "flex";   
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 20px;
`;

const PlayerName = styled.div`
  text-align: left;
  font-size: 1rem;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.accent};
`;

export { StyledPokerPlayer, PlayerName };
