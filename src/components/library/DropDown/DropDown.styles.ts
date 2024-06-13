import styled, { css } from 'styled-components';
import { Dropdown } from 'react-bootstrap';

const StyledDropdown = styled(Dropdown)(({ theme }) =>
  css({
    marginTop: '8px',
    '& .btn-primary.dropdown-toggle': {
      boxShadow: `0 0 0 0.25rem ${theme.colors.black}`,
      backgroundColor: `${theme.colors.red} !important`,
      borderColor: `${theme.colors.red} !important`,
      '&:focus, &:active': {
        boxShadow: `0 0 0 0.25rem ${theme.colors.black}`,
        backgroundColor: `${theme.colors.red} !important`,
        borderColor: `${theme.colors.red} !important`,
      },
    },
    '& .btn-primary': {
      minWidth: '150px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '8px',
      alignItems: 'center',
      backgroundColor: theme.colors.black,
      borderColor: theme.colors.red,
      '&:hover, &:focus, &:active, &.active': {
        backgroundColor: theme.colors.red,
        borderColor: theme.colors.red,
      },
    },
    '& .dropdown-menu.show': {
      marginTop: '16px',
      backgroundColor: theme.colors.black,
      boxShadow: `0 0 0 0.05rem ${theme.colors.red} !important`,
      padding: '0px',
    },
    '& .dropdown-item.active': {
      backgroundColor: theme.colors.red,
    },
    '& .dropdown-item': {
      backgroundColor: theme.colors.black,
      color: theme.colors.light,
    },
  }),
);

export { StyledDropdown };
