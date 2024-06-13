import { Form } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const StyledSignUpForm = styled(Form)(() =>
  css({
    width: '30%',
  }),
);

const StyledInputTemplate = styled.div(() =>
  css({
    margin: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }),
);

const StyledHelperText = styled(Form.Text)(({ theme }) =>
  css({
    color: theme.colors.danger,
  }),
);

export { StyledSignUpForm, StyledInputTemplate, StyledHelperText };
