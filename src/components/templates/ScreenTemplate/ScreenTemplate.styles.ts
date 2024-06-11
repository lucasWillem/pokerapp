import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const StyledScreenTemplate = styled(Container)`
  padding: 5%;
  background: ${(props) => props.theme.colors.dark};
`;

export { StyledScreenTemplate };
