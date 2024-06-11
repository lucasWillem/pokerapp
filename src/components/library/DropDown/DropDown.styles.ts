import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

const StyledDropdown = styled(Dropdown)`
  margin-top: 8px;
  & .btn-primary.dropdown-toggle {
    box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.secondary} !important;
    border-color: ${(props) => props.theme.colors.secondary} !important;
    &:focus,
    &:active {
      box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.dark};
      background-color: ${(props) => props.theme.colors.secondary} !important;
      border-color: ${(props) => props.theme.colors.secondary} !important;
    }
  }
  & .btn-primary {
    min-width: 150px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
    background-color: ${(props) => props.theme.colors.dark};
    border-color: ${(props) => props.theme.colors.secondary};
    &:hover,
    &:focus,
    &:active,
    &.active {
      background-color: ${(props) => props.theme.colors.secondary};
      border-color: ${(props) => props.theme.colors.secondary};
    }
  }

  & .dropdown-menu.show {
    margin-top: 16px;
    background-color: ${(props) => props.theme.colors.dark};
    box-shadow: 0 0 0 0.05rem ${(props) => props.theme.colors.secondary} !important;
    padding: 0px;
  }

  & .dropdown-item.active {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  & .dropdown-item {
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.light};
  }
`;

export { StyledDropdown };
