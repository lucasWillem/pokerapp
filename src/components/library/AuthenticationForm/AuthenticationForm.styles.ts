import { Form, Button, ButtonProps } from 'react-bootstrap';
import styled from 'styled-components';

const StyledAuthenticationForm = styled(Form)`
  width: 30%;
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

const StyledSubmissionButton = styled(Button)<ButtonProps>`
  color: ${(props) => props.theme.colors.light};
`;

export {
  StyledAuthenticationForm,
  StyledInputTemplate,
  StyledHelperText,
  StyledSubmissionButton,
};
