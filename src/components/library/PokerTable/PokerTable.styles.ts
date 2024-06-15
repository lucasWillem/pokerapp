import styled, { css } from 'styled-components';
import { ColorOptions } from '@global/theme';

export interface StyledPokerTableProps {
  color?: ColorOptions;
}

const StyledPokerTable = styled.div<StyledPokerTableProps>(
  ({ theme, color = ColorOptions.Green }) =>
    css({
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors[color],
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      marginTop: 32,
    }),
);

export { StyledPokerTable };
