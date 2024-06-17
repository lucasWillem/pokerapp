import { memo, FC } from "react";
import { StyledDropDown } from "./DropDown.styles";

interface DropDownProps {
  menuItems: number[];
  title: string;
  makeSelection: (menuItem: number) => void;
  activeItem: number;
}

const DropDown: FC<DropDownProps> = ({
  menuItems,
  title,
  makeSelection,
  activeItem,
}) => {
  return (
    <StyledDropDown data-cy="dropdown">
      <StyledDropDown.Toggle>{title}</StyledDropDown.Toggle>
      <StyledDropDown.Menu>
        {menuItems.map((menuItem, i) => (
          <StyledDropDown.Item
            data-cy="dropdown-item"
            active={activeItem === menuItem}
            key={`${menuItem}-${i}`}
            onClick={() => makeSelection(menuItem)}
          >
            {menuItem}
          </StyledDropDown.Item>
        ))}
      </StyledDropDown.Menu>
    </StyledDropDown>
  );
};

export default memo(DropDown);
