import { Form, FormProps, Container } from "react-bootstrap";
import styled, { css } from "styled-components";
import { ColorOptions } from "@/global/theme";

const StyledSignUpForm = styled(Form)(() =>
  css({
    width: "25%",
    "@media (max-width: 1100px)": {
      width: "30%",
    },
    "@media (max-width: 950px)": {
      width: "40%",
    },
    "@media (max-width: 600px)": {
      width: "60%",
    },
    "@media (max-width: 400px)": {
      width: "80%",
    },
  }),
);

export interface StyledSignUpFormControlProps extends FormProps {
  color?: ColorOptions;
}

const StyledSignUpFormControl = styled(
  Form.Control,
)<StyledSignUpFormControlProps>(({ theme, color = ColorOptions.Green }) =>
  css({
    "&:focus": {
      border: `0.08rem solid ${theme.colors[color]}`,
      boxShadow: `0 0 0 0.08rem ${theme.colors[color]} !important`,
    },
  }),
);

const StyledInputTemplate = styled.div(() =>
  css({
    margin: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  }),
);

const StyledHelperText = styled(Form.Text)(({ theme }) =>
  css({
    color: theme.colors.danger,
  }),
);

const StyledButtonsContainer = styled(Container)(() =>
  css({ display: "flex", flexDirection: "column", alignItems: "center" }),
);

export {
  StyledSignUpForm,
  StyledInputTemplate,
  StyledHelperText,
  StyledSignUpFormControl,
  StyledButtonsContainer,
};
