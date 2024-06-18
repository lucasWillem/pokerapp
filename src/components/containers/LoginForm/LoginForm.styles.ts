import { Form, Container } from "react-bootstrap";
import styled, { css } from "styled-components";

const StyledLoginForm = styled(Form)(() =>
  css({
    width: "35%",
    "@media (max-width: 900px)": {
      width: "50%",
    },
    "@media (max-width: 600px)": {
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
