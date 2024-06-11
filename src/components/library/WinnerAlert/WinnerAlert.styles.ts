import styled from 'styled-components';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const StyledWinnerAlert = styled(BootstrapAlert)`
  position: fixed;
  top: 24px;
  left: 30%;
  right: 30%;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.dark};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.light};
  .btn-close {
    display: none;
  }
`;

export { StyledWinnerAlert };
