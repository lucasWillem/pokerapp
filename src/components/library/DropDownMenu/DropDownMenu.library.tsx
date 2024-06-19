import { memo, FC } from "react";
import { StyledDropDownMenu } from "./DropDownMenu.styles";

interface DropDownMenuProps {
  menuItems: number[];
  title: string;
  makeSelection: (menuItem: number) => void;
  activeItem: number;
}

const DropDownMenu: FC<DropDownMenuProps> = ({
  menuItems,
  title,
  makeSelection,
  activeItem,
}) => {
  return (
    <StyledDropDownMenu data-cy="dropdown">
      <StyledDropDownMenu.Toggle>{title}</StyledDropDownMenu.Toggle>
      <StyledDropDownMenu.Menu>
        {menuItems.map((menuItem, i) => (
          <StyledDropDownMenu.Item
            data-cy="dropdown-item"
            active={activeItem === menuItem}
            key={`${menuItem}-${i}`}
            onClick={() => makeSelection(menuItem)}
          >
            {menuItem}
          </StyledDropDownMenu.Item>
        ))}
      </StyledDropDownMenu.Menu>
    </StyledDropDownMenu>
  );
};

export default memo(DropDownMenu);
