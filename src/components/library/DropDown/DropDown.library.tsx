import { memo, FC } from "react";
import { StyledDropdown } from "./Dropdown.styles";

interface DropdownProps {
  menuItems: number[];
  title: string;
  makeSelection: (menuItem: number) => void;
  activeItem: number;
}

const Dropdown: FC<DropdownProps> = ({
  menuItems,
  title,
  makeSelection,
  activeItem,
}) => {
  return (
    <StyledDropdown data-cy="dropdown">
      <StyledDropdown.Toggle>{title}</StyledDropdown.Toggle>
      <StyledDropdown.Menu>
        {menuItems.map((menuItem, i) => (
          <StyledDropdown.Item
            data-cy="dropdown-item"
            active={activeItem === menuItem}
            key={`${menuItem}-${i}`}
            onClick={() => makeSelection(menuItem)}
          >
            {menuItem}
          </StyledDropdown.Item>
        ))}
      </StyledDropdown.Menu>
    </StyledDropdown>
  );
};

export default memo(Dropdown);
