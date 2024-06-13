import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSignUpForm = styled(Form)`
  width: 30%;
  height: 40vh;
`;

const StyledInputTemplate = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledHelperText = styled(Form.Text)`
  color: ${(props) => props.theme.colors.danger};
`;

export { StyledSignUpForm, StyledInputTemplate, StyledHelperText };
