import styled, { css } from 'styled-components';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const StyledWinnerAlert = styled(BootstrapAlert)(({ theme }) =>
  css({
    position: 'fixed',
    top: '24px',
    left: '30%',
    right: '30%',
    zIndex: 2,
    backgroundColor: theme.colors.black,
    border: `2px solid ${theme.colors.gold}`,
    color: theme.colors.light,
    '.btn-close': {
      display: 'none',
    },
  }),
);

export { StyledWinnerAlert };
