import { memo, FC } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

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
    <Dropdown>
      <DropdownButton title={title}>
        {menuItems.map((menuItem, i) => (
          <Dropdown.Item
            active={activeItem === menuItem}
            key={`${menuItem}-${i}`}
            onClick={() => makeSelection(menuItem)}
          >
            {menuItem}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Dropdown>
  );
};

export default memo(DropDown);
