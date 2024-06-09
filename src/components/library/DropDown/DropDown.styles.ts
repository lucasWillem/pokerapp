import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

const StyledDropdown = styled(Dropdown)`
  margin-top: 8px;
  & .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.secondary};
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
`;

export { StyledDropdown };
