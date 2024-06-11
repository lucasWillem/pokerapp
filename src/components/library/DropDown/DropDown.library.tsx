import { memo, FC } from 'react';
import { StyledDropdown } from './DropDown.styles';

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
    </StyledDropdown>
  );
};

export default memo(DropDown);
