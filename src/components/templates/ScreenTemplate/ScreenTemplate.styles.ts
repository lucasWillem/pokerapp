import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const StyledScreenTemplate = styled(Container)`
  padding: 5%;
  background: ${(props) => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { StyledScreenTemplate };
