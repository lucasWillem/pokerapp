import styled, { css } from "styled-components";
import { Dropdown, DropdownProps } from "react-bootstrap";
import { ColorOptions } from "@/global/theme";

export interface StyledDropDownProps extends DropdownProps {
  color?: ColorOptions;
}

const StyledDropDown = styled(Dropdown)(({
  theme,
  color = ColorOptions.Green,
}) => {
  const backgroundColor = theme.colors["black"];

  return css({
    marginTop: "8px",
    "& .btn-primary.dropdown-toggle": {
      boxShadow: `0 0 0 0.02rem ${theme.colors[color]}`,
      backgroundColor: `${backgroundColor} !important`,
      "&:focus, &:active": {
        boxShadow: `0 0 0 0.02rem ${theme.colors[color]}`,
        backgroundColor: `${backgroundColor} !important`,
        borderColor: `${theme.colors[color]} !important`,
      },
    },
    "& .btn-primary": {
      minWidth: "150px",
      display: "flex",
      justifyContent: "space-between",
      gap: "8px",
      alignItems: "center",
      backgroundColor,
      borderColor: theme.colors[color],
      "&:hover, &:focus, &:active, &.active": {
        backgroundColor: theme.colors[color],
      },
    },
    "& .dropdown-menu.show": {
      marginTop: "16px",
      backgroundColor,
      padding: "0px",
    },
    "& .dropdown-item.active": {
      backgroundColor: theme.colors[color],
    },
    "& .dropdown-item": {
      backgroundColor,
      color: theme.colors.light,
    },
  });
});

export { StyledDropDown };
