import { ColorOptions } from "@global/theme";
import { Dropdown, DropdownProps } from "react-bootstrap";
import { styled, css } from "styled-components";

export interface StyledAuthMenuProps extends DropdownProps {
  color?: ColorOptions;
}

const StyledAuthMenu = styled(Dropdown)<StyledAuthMenuProps>(
  ({ theme, color = ColorOptions.Black }) =>
    css({
      position: "absolute",
      top: "8px",
      left: "8px",
      padding: "8px",
      cursor: "pointer",
      "& .dropdown-menu.show": {
        backgroundColor: theme.colors[color],
      },
    }),
);

export { StyledAuthMenu };
