import { memo } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

type Props = {
  menuItems: number[];
  title: string;
  makeSelection: (menuItem: number) => void;
  activeItem: number;
};

const DropDown = function ({
  menuItems,
  title,
  makeSelection,
  activeItem,
}: Props) {
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
