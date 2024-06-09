import { memo, FC } from "react";
import { StyledDropdown } from "./DropDown.styles";

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
    <StyledDropdown>
      <StyledDropdown.Toggle>{title}</StyledDropdown.Toggle>

      <StyledDropdown.Menu>
        {menuItems.map((menuItem, i) => (
          <StyledDropdown.Item
            active={activeItem === menuItem}
            key={`${menuItem}-${i}`}
            onClick={() => makeSelection(menuItem)}
          >
            {menuItem}
          </StyledDropdown.Item>
        ))}
      </StyledDropdown.Menu>
      {/* <DropdownButton title={title}>
        {menuItems.map((menuItem, i) => (
          <StyledDropdown.Item
            active={activeItem === menuItem}
            key={`${menuItem}-${i}`}
            onClick={() => makeSelection(menuItem)}
          >
            {menuItem}
          </StyledDropdown.Item>
        ))}
      </DropdownButton> */}
    </StyledDropdown>
  );
};

export default memo(DropDown);
