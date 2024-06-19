import { Form, Container } from "react-bootstrap";
import styled, { css } from "styled-components";

const StyledLoginForm = styled(Form)(() =>
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
  StyledLoginForm,
  StyledInputTemplate,
  StyledHelperText,
  StyledButtonsContainer,
};
