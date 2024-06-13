import styled, { css } from 'styled-components';

const StyledPokerTable = styled.div(({ theme }) =>
  css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.green,
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  }),
);

export { StyledPokerTable };
