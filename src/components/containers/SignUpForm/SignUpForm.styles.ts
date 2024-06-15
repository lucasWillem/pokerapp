import { Form, FormProps } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { ColorOptions } from '@global/theme';

const StyledSignUpForm = styled(Form)(() =>
  css({
    width: '30%',
  }),
);

export interface StyledSignUpFormControlProps extends FormProps {
  color?: ColorOptions;
}

const StyledSignUpFormControl = styled(
  Form.Control,
)<StyledSignUpFormControlProps>(({ theme, color = ColorOptions.Green }) =>
  css({
    '&:focus': {
      border: `0.08rem solid ${theme.colors[color]}`,
      boxShadow: `0 0 0 0.08rem ${theme.colors[color]} !important`,
    },
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

export {
  StyledSignUpForm,
  StyledInputTemplate,
  StyledHelperText,
  StyledSignUpFormControl,
};
